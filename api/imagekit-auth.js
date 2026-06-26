import crypto from 'node:crypto';

export default async function handler(request, response) {
  const { fileName, fileType } = request.body || {};

  if (!fileName || !fileType) {
    return response.status(400).json({ message: 'fileName and fileType are required.' });
  }

  const imagekitPrivateKey = globalThis.process?.env?.IMAGEKIT_PRIVATE_KEY;
  const imagekitPublicKey = globalThis.process?.env?.IMAGEKIT_PUBLIC_KEY;
  const imagekitUrlEndpoint = globalThis.process?.env?.IMAGEKIT_URL_ENDPOINT;

  if (!imagekitPrivateKey || !imagekitPublicKey || !imagekitUrlEndpoint) {
    return response.status(500).json({ message: 'ImageKit environment variables are not configured.' });
  }

  const token = crypto.randomBytes(16).toString('hex');
  const expire = Math.floor(Date.now() / 1000) + 60 * 60;
  const signature = crypto
    .createHmac('sha1', imagekitPrivateKey)
    .update(token + expire)
    .digest('hex');

  return response.status(200).json({
    token,
    expire,
    signature,
    publicKey: imagekitPublicKey,
    urlEndpoint: imagekitUrlEndpoint,
  });
}

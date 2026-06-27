import ImageKit from "imagekit";

export default function handler(req, res) {
  try {
    if (
      !import.meta.env.IMAGEKIT_PUBLIC_KEY ||
      !import.meta.env.IMAGEKIT_PRIVATE_KEY ||
      !import.meta.env.IMAGEKIT_URL_ENDPOINT
    ) {
      return res.status(400).json({
        error: "Missing ImageKit env variables",
        hasPublicKey: !!import.meta.env.IMAGEKIT_PUBLIC_KEY,
        hasPrivateKey: !!import.meta.env.IMAGEKIT_PRIVATE_KEY,
        hasUrlEndpoint: !!import.meta.env.IMAGEKIT_URL_ENDPOINT,
      });
    }

    const imagekit = new ImageKit({
      publicKey: import.meta.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: import.meta.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: import.meta.env.IMAGEKIT_URL_ENDPOINT,
    });

    const authParams = imagekit.getAuthenticationParameters();

    return res.status(200).json(authParams);
  } catch (error) {
    return res.status(500).json({
      error: "ImageKit auth failed",
      message: error.message,
    });
  }
}
// import crypto from "crypto";

// export default function handler(req, res) {
//   const token = crypto.randomUUID();
//   const expire = Math.floor(Date.now() / 1000) + 60 * 5;

//   const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;

//   const signature = crypto
//     .createHmac("sha1", privateKey)
//     .update(token + expire)
//     .digest("hex");

//   res.status(200).json({
//     token,
//     expire,
//     signature,
//   });
// }
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: import.meta.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: import.meta.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: import.meta.env.IMAGEKIT_URL_ENDPOINT,
});

export default function handler(req, res) {
  const authenticationParameters =
    imagekit.getAuthenticationParameters();

  res.status(200).json(authenticationParameters);
}
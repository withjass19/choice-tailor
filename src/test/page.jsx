// Install: npm install @imagekit/react

import { Image, ImageKitProvider } from '@imagekit/react';

export default function Page() {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/nfng3s7jc">
      <Image
        src="/default-image.jpg"
        width={400}
        height={300}
        alt="Image"
      />
    </ImageKitProvider>
  )
}
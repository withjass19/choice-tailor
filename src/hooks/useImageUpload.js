import { useState } from 'react';
import { uploadToImageKit } from '@/services/imageKitService';

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImages = async (files) => {
    if (!files?.length) {
      return [];
    }

    try {
      setUploading(true);
      setError(null);

      const uploadedUrls = [];
      for (const file of files) {
        const url = await uploadToImageKit(file);
        uploadedUrls.push(url);
      }

      return uploadedUrls;
    } catch (err) {
      setError(err.message || 'Image upload failed.');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImages, uploading, error };
}

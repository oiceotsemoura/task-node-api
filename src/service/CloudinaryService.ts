import { Cloudinary } from '../config/Cloudinary';

const uploadBase64ToCloudinary = async (base64Data: string) => {
  try {
    const result = await Cloudinary.uploader.upload(base64Data, {
      format: 'pdf',
      resource_type: 'raw',
      access_mode: 'public',
      upload_preset: 'pl2epxko',
    });
    return result;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload to Cloudinary');
  }
};

export { uploadBase64ToCloudinary };

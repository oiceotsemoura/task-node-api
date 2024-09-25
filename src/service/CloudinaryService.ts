import { Cloudinary } from '../config/Cloudinary';

const uploadBase64ToCloudinary = async (base64Data: string) => {
  try {
    const result = await Cloudinary.uploader.upload(base64Data, { format: 'pdf', resource_type: 'auto' });
    return result;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload to Cloudinary');
  }
};

export { uploadBase64ToCloudinary };

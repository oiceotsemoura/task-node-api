"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadBase64ToCloudinary = void 0;
const Cloudinary_1 = require("../config/Cloudinary");
const uploadBase64ToCloudinary = async (base64Data) => {
    try {
        const result = await Cloudinary_1.Cloudinary.uploader.upload(base64Data, {
            resource_type: 'raw',
            access_mode: 'public',
        });
        return result;
    }
    catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Failed to upload to Cloudinary');
    }
};
exports.uploadBase64ToCloudinary = uploadBase64ToCloudinary;

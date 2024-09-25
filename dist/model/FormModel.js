"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModel = void 0;
const mongoose_1 = require("mongoose");
const FormSchema = new mongoose_1.Schema({
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    purchaseLetter: { type: String, required: true },
    companyRegistration: { type: String, required: true },
    bankInfo: { type: String, required: true },
    observations: { type: String },
    destinationCountry: { type: String, required: true },
    destinationPort: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    phone: { type: String, required: true },
    shipmentType: { type: String, required: true },
}, { collection: 'Form' });
exports.FormModel = (0, mongoose_1.model)('Form', FormSchema);

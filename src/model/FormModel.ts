import { IForm } from '@interfaces/IForm';
import { model, Schema } from 'mongoose';

const FormSchema = new Schema<IForm>(
  {
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
  },
  { collection: 'Form' },
);

export const FormModel = model<IForm>('Form', FormSchema);

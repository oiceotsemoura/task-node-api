import { IForm } from '@interfaces/IForm';
import * as FormRepository from '@repository/FormRepository';
import { uploadBase64ToCloudinary } from './CloudinaryService';

export const createForm = async (form: IForm) => {
  const bankInfoUrl = (await uploadBase64ToCloudinary(form.bankInfo)).secure_url;
  const purchaseLetterUrl = (await uploadBase64ToCloudinary(form.purchaseLetter)).secure_url;
  const companyRegistrationUrl = (await uploadBase64ToCloudinary(form.companyRegistration)).secure_url;
  const newForm: IForm = {
    ...form,
    bankInfo: bankInfoUrl,
    purchaseLetter: purchaseLetterUrl,
    companyRegistration: companyRegistrationUrl,
  };
  const formCreated = await FormRepository.saveForm(newForm);
  return formCreated;
};

export const listForms = async () => {
  const forms = await FormRepository.getForms();
  return forms;
};

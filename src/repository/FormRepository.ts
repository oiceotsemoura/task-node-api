import { IForm } from '@interfaces/IForm';
import { FormModel } from '@model/FormModel';

export const getForms = async () => {
  const clients = await FormModel.find();
  return clients as IForm[];
};

export const saveForm = (form: IForm) => {
  const formModel = new FormModel({ ...form });
  return formModel
    .save()
    .then((doc) => {
      console.log('form salvo! ', doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

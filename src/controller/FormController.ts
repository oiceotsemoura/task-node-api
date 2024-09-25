import express, { Request, Response } from 'express';
import * as FormsService from '@service/FormService';
import { IRequestBody } from '@interfaces/Http';
import { IForm } from '@interfaces/IForm';

const router = express.Router();

router.post('/formulario', async (req: any, res: Response) => {
  try {
    const form = req.body;
    await FormsService.createForm(form);
    return res.status(201).send('Formulário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar formulário:', error);
    res.status(500).send('Erro ao salvar formulário.');
  }
});

router.get('/formularios', async (req: Request, res: Response) => {
  try {
    const forms = await FormsService.listForms();
    return res.status(200).send({ data: forms });
  } catch (error) {
    console.error('Erro ao listar formulário:', error);
    res.status(500).send('Erro ao listar formulário.');
  }
});

export default router;

import 'module-alias/register';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import FormController from './controller/FormController';
import mongoose from 'mongoose';
import Cors from 'cors';

const app: Application = express();
const PORT = 3002;

mongoose
  .connect('mongodb+srv://oiceotse:mvada157@helfrig.yp9hs.mongodb.net/?retryWrites=true&w=majority&appName=Helfrig', {
    dbName: 'helfrig',
  })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
  });

app.use(Cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(FormController);

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}

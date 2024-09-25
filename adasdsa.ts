const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/formulario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});

// Criar modelo para armazenar os dados no MongoDB
const FormularioSchema = new mongoose.Schema({
  produto: String,
  quantidade: Number,
  paisDestino: String,
  portoDestino: String,
  tipoEmbarque: String,
  observacoes: String,
  cartaIntencao: String,  // Base64 do arquivo
  documentosRegistro: String,  // Base64 do arquivo
  informacoesBancarias: String,  // Base64 do arquivo
});

const Formulario = mongoose.model('Formulario', FormularioSchema);

// Inicializar o Express
const app = express();
const PORT = 3000;

// Configuração do Multer para lidar com o upload de arquivos
const storage = multer.memoryStorage(); // Usar memória em vez de armazenar no disco
const upload = multer({ storage: storage });

// Middleware para interpretar JSON
app.use(express.json());

// Função para converter arquivo para Base64
function encodeBase64(file) {
  return file.buffer.toString('base64');
}

// Rota POST para receber o formulário e arquivos anexados
app.post('/formulario', upload.fields([
  { name: 'cartaIntencao', maxCount: 1 },
  { name: 'documentosRegistro', maxCount: 1 },
  { name: 'informacoesBancarias', maxCount: 1 },
]), async (req, res) => {
  try {
    const { produto, quantidade, paisDestino, portoDestino, tipoEmbarque, observacoes } = req.body;

    // Converter arquivos para base64
    const cartaIntencaoBase64 = req.files['cartaIntencao'] ? encodeBase64(req.files['cartaIntencao'][0]) : null;
    const documentosRegistroBase64 = req.files['documentosRegistro'] ? encodeBase64(req.files['documentosRegistro'][0]) : null;
    const informacoesBancariasBase64 = req.files['informacoesBancarias'] ? encodeBase64(req.files['informacoesBancarias'][0]) : null;

    // Salvar no MongoDB
    const novoFormulario = new Formulario({
      produto,
      quantidade,
      paisDestino,
      portoDestino,
      tipoEmbarque,
      observacoes,
      cartaIntencao: cartaIntencaoBase64,
      documentosRegistro: documentosRegistroBase64,
      informacoesBancarias: informacoesBancariasBase64,
    });

    await novoFormulario.save();
    res.status(201).send('Formulário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar formulário:', error);
    res.status(500).send('Erro ao salvar formulário.');
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

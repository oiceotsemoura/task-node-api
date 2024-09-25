"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const FormController_1 = __importDefault(require("./controller/FormController"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3002;
mongoose_1.default
    .connect('mongodb+srv://oiceotse:mvada157@helfrig.yp9hs.mongodb.net/?retryWrites=true&w=majority&appName=Helfrig', {
    dbName: 'helfrig',
})
    .then(() => {
    console.log('Conectado ao MongoDB');
})
    .catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(FormController_1.default);
try {
    app.listen(PORT, () => {
        console.log(`Connected successfully on port ${PORT}`);
    });
}
catch (error) {
    console.error(`Error occured: ${error.message}`);
}

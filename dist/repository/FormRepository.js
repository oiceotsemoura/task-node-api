"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveForm = exports.getForms = void 0;
const FormModel_1 = require("@model/FormModel");
const getForms = async () => {
    const clients = await FormModel_1.FormModel.find();
    return clients;
};
exports.getForms = getForms;
const saveForm = (form) => {
    const formModel = new FormModel_1.FormModel({ ...form });
    return formModel
        .save()
        .then((doc) => {
        console.log('form salvo! ', doc);
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.saveForm = saveForm;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const farmacovigilancia_2 = __importDefault(require("../models/farmacovigilancia"));
function getAllfarmacovigilancias(req, res) {
    farmacovigilancia_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getfarmacovigilanciasPersona(req, res) {
    farmacovigilancia_2.default.find({ "idPersona": req.params.idPersona }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newfarmacovigilancia(req, res) {
    const farmacovigilancia_1 = new farmacovigilancia_2.default({
        "idPersona": req.body.idPersona,
        "persona": req.body.persona,
        "fecha": req.body.fecha,
        "dni": req.body.dni,
        "telefono": req.body.telefono,
        "fiebre": req.body.fiebre,
        "tos": req.body.tos,
        "dificultad": req.body.dificultad,
        "malestar": req.body.malestar
    });
    console.log(req.body);
    farmacovigilancia_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getAllfarmacovigilancias, getfarmacovigilanciasPersona, newfarmacovigilancia };

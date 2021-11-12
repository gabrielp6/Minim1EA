"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar_2 = __importDefault(require("../models/bar"));
function getAllBares(req, res) {
    bar_2.default.find({}).then((data) => {
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
function getBar(req, res) {
    bar_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newBar(req, res) {
    const bar_1 = new bar_2.default({
        "id": req.body.id,
        "name": req.body.name,
        "address": req.body.address,
        "musicTaste": req.body.musicTaste,
        "owner": req.body.owner
    });
    console.log(req.body);
    bar_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateBar(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const musicTaste = req.body.musicTaste;
    const owner = req.body.owner;
    bar_2.default.update({ "id": id }, { $set: { "id": id, "name": name, "address": address, "musicTaste": musicTaste, "owner": owner } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteBar(req, res) {
    const { id } = req.params;
    bar_2.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getAllBares, getBar, newBar, updateBar, deleteBar };

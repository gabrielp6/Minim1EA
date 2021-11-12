"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const farmacovigilancia_controller_1 = __importDefault(require("../controllers/farmacovigilancia.controller"));
const router = express_1.Router();
router.get('/', farmacovigilancia_controller_1.default.getAllfarmacovigilancias);
router.get('/:idPersona', farmacovigilancia_controller_1.default.getfarmacovigilanciasPersona);
router.post('/new', farmacovigilancia_controller_1.default.newfarmacovigilancia);
exports.default = router;

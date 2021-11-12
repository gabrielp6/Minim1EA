import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import  farmacovigilancia  from '../models/farmacovigilancia'


function getAllfarmacovigilancias (req:Request, res:Response): void {
    farmacovigilancia.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getfarmacovigilanciasPersona (req:Request, res:Response): void {
    farmacovigilancia.find({"idPersona":req.params.idPersona}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function newfarmacovigilancia (req:Request, res:Response): void {
    const farmacovigilancia_1 = new farmacovigilancia({
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
    })
}




export default { getAllfarmacovigilancias, getfarmacovigilanciasPersona, newfarmacovigilancia};
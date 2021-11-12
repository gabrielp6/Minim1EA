import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const farmacovigilanciaSchema = new Schema({
    idPersona:{
        type: String,
    },

    persona: {
        type: String,
        ref: Usuario
    },
    fecha: {
        type: String
    },
    dni: {
        type: String
    },
    telefono: {
        type: String
    },

    fiebre:{
        type: String
    },

    tos:{
        type: String
    },
    dificultad:{
        type: String
    },

    malestar:{
        type: String
    }
    });

export interface IFarmacovigilancia extends Document {
    idPersona: String;
    persona: String;
    fecha: String;
    dni: String;
    telefono: String;
    fiebre: String;
    tos: String;
    dificultad: String;
    malestar: String;
}

export default mongoose.model<IFarmacovigilancia>('Farmacovigilancia', farmacovigilanciaSchema);
import { Router } from "express"; 
import farmacovigilanciaController from "../controllers/farmacovigilancia.controller";

const router = Router();

router.get('/', farmacovigilanciaController.getAllfarmacovigilancias);
router.get('/:idPersona', farmacovigilanciaController.getfarmacovigilanciasPersona);
router.post('/new',farmacovigilanciaController.newfarmacovigilancia);

export default router;
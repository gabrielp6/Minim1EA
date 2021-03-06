import { Router } from "express"; 
import usuarioController from "../controllers/usuario.controller";

const router = Router();

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuario);
router.post('/new',usuarioController.newUsuario);
router.put('/update/:id', usuarioController.updateUsuario);

export default router;
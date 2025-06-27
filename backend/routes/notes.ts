import { Router } from 'express';
import {NotesController} from "../controllers/notes-controller";

const router = Router();
const controller = NotesController.create()

router.post('/', (req, res) => controller.createNote(req, res))

export default router;
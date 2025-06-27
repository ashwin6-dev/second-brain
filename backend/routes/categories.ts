import { Router } from 'express';
import {CategoriesController} from "../controllers/categories-controller";

const router = Router();
const controller = CategoriesController.create()

router.post('/:category', (req, res) => controller.createCategoryFolder(req, res))

export default router;
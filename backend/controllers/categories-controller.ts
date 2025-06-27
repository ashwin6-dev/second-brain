import { Request, Response } from 'express';
import {CategoryService} from "../services/category-service";
import {CategoryFolder} from "../../common/category-folder";

export class CategoriesController {
    constructor(private categoryService: CategoryService) {}

    static create() {
        return new CategoriesController(new CategoryService());
    }

    createCategoryFolder(req: Request, res: Response) {
        try {
            const category: CategoryFolder = {
                categoryName: req.params.category,
                folderName: req.body.folderName,
            };

            this.categoryService.createCategoryFolder(category);
            res.send({
                success: true,
                data: null,
                message: 'Category created successfully'
            });
        }catch (e: Error | any) {
            res.send({
                success: false,
                data: null,
                message: e.message
            });
        }
    }
}
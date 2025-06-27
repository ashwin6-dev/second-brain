import { getUserConfig } from "../lib/user-config";
import fs from "fs";
import path from "path";
import {CategoryFolder} from "../../common/category-folder";

export class CategoryService {
    createCategoryFolder(category: CategoryFolder) {
        const userConfig = getUserConfig();
        const {categoryName, folderName} = category;
        const categoryPath = path.join(userConfig.saveLocation, categoryName);
        const folderPath = path.join(categoryPath, folderName.replace(/ /g, "-"));

        fs.mkdirSync(folderPath, { recursive: true });
    }
}

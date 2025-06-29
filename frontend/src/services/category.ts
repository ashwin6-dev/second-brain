import api from "./api.ts";

export const createCategory = async (category: string, folderName: string) => {
    const response = await api.post(`/categories/${category.toLowerCase()}`, { folderName })

    return response;
};
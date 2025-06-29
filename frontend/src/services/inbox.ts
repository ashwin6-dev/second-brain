import type {Note} from "../../../common/note.ts";
import api from './api.ts'

export const createNote = async (note: Note) => {
    const response = await api.post('/notes', note);

    return response
}

export const getInbox = async () => {
    const {data: response} = await api.get('/notes');
    console.log(response);
    return response.data;
};

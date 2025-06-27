import { Request, Response } from 'express';
import {NoteService} from "../services/note-service";

export class NotesController {
    constructor(private noteService: NoteService) {}

    static create() {
        return new NotesController(new NoteService());
    }

    createNote(req: Request, res: Response) {
        try {
            const note = req.body;
            this.noteService.createNote(note);

            res.send({
                success: true,
                data: note,
                message: 'Note created successfully'
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
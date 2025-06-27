import { Note } from "../../common/note";
import { getUserConfig } from "../lib/user-config";
import fs from "fs";
import path from "path";

export class NoteService {
    createNote(note: Note) {
        const userConfig = getUserConfig();
        const inboxPath = path.join(userConfig.saveLocation, "inbox");
        const filename = note.title.replace(/ /g, "-");

        fs.mkdirSync(inboxPath, { recursive: true });

        const filePath = path.join(inboxPath, `${filename}.md`);
        fs.writeFileSync(filePath, note.content);
    }
}

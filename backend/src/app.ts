import express from 'express';
import NotesRouter from '../routes/notes';
import ConfigsRouter from '../routes/configs';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/notes', NotesRouter);
app.use('/configs', ConfigsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
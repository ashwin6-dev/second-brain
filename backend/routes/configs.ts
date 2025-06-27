import { Router } from 'express';
import {setUserConfig} from "../lib/user-config";

const router = Router();

router.post('/save-location', (req, res) => {
    setUserConfig('saveLocation', req.body.saveLocation);
    res.sendStatus(200);
})

export default router;
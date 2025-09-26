import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import showData from '../data/TVShows.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get('/', (req, res) => {
  res.json(showData);
});

router.get('/:title', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/public/show.html'));  

})

export default router;
import express from 'express';
export const router = express.Router();

import * as starSignModels from '../models/starSign.js';

router.get("/", async function (req, res){
    const result = await starSignModels.getStarSigns();
    res.json({success: true, payload: result});
})

// module.exports = router;
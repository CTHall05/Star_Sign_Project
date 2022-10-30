import express from 'express';
const router = express.Router()
export default router; 


import * as starSignModels from '../models/starSign.js';

router.get("/", async function (req, res){
    const result = await starSignModels.getStarSigns();
    res.json({success: true, payload: result});
})

// module.exports = router;
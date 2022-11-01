import express from 'express';
const router = express.Router()

import {getStarSigns, getStarSignByName} from '../models/starSign.js';

router.get("/", async function (req, res){
    if (req.query.name !== undefined){
        const result = await getStarSignByName(req.query.name);
        return res.json({success: true, payload: result})
    }
    const result = await getStarSigns();
    res.json({success: true, payload: result}); 
})


export default router; 
// module.exports = router; 
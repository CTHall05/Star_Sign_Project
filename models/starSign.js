import query from '../db/index.js';

async function getStarSigns() {
    const result = await query('SELECT * FROM starsigns');
    console.log(result)
    return result.rows;
};

export {
    getStarSigns
} 
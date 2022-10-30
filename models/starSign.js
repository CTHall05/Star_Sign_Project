import query from '../db/index.js';

export async function getStarSigns() {
    const result = await query('SELECT * FROM starsigns');
    return result.rows;
};


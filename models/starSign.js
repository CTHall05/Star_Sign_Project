const { query } = import('../db/index.js');

export async function getStarsigns() {
    const result = await query('SELECT * FROM starsigns');
    return result.rows;
};


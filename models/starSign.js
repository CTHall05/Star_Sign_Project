import query from '../db/index.js';

export async function getStarSigns() {
    const result = await query(`SELECT * FROM starsigns`);
    return result.rows;  
};

export async function getStarSignByName(){
    const result = await query(`SELECT * FROM starsigns WHERE star_sign = 'Leo'`);
    return result.rows;  
}
import { pool } from '../config/database.js'

const getShows = async (req, res) => {

    try{
    const result = await pool.query('SELECT * FROM shows ORDER BY id ASC')
    res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' })
    }
} 

export default { getShows }
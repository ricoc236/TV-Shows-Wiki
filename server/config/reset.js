import { pool } from './database.js'
import './dotenv.js'
import showData from '../data/TVShows.js'

const createShowsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS shows;

        CREATE TABLE IF NOT EXISTS shows (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            rating NUMERIC(2, 1),
            release_date DATE,
            description TEXT,
            image VARCHAR(512)
        )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 shows table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating shows table', err)
    }

}




const seedShowsTable = async () => {
  await createShowsTable()
  showData.forEach((show) => {
        const insertQuery = {
            text: 'INSERT INTO shows (title, rating, release_date, description, image) VALUES ($1, $2, $3, $4, $5)'
        };

        const values = [
            show.title,  
            show.rating, 
            show.release_date, 
            show.description, 
            show.image
        ];
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting show', err)
                return
            }

            console.log(`✅ ${show.title} added successfully`)
        })
    })

}

seedShowsTable()









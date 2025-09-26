import express from 'express'
const app = express()
const PORT = process.env.PORT || 3001
app.use('/public', express.static('public'))
express.static('dist')
import showsRouter from './routes/TVShows.js'
app.use('/script', express.static('./public/scripts'))
app.use('/shows', showsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/shows', showsRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
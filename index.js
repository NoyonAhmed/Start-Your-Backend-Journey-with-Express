const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res, next) => {
    res.send('<h1>hello world</h1>')
    next()
})



app.get('/user', (req, res) => {
    res.send('<h1>Noyon Ahmed</h1>')
})

app.get('/user/email', (req, res) => {
    res.send('<h1>email : anoyon002@gmail.com</h1>')
})

app.listen(PORT, () => {
    console.log('Welcome Noyon Ahmed');
})

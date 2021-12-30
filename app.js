//memanggil library express dan cors
const express = require('express')
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')

//memanggil objek express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//panggil database
const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log(`Database Connected!`)
    }).catch((err) => {
        console.log(`Cannot connect to the database!`, err)
        process.exit()
    });
    
//running expressjs
app.get('/', (req,res) => {
    res.json({
        message: "Welcome to failed JSON file."
    })
})

//regist routes
require('./app/routes/post.routes')(app)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Service is running on http://localhost:${PORT}`)
})
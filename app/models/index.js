//import file db.config didalam folder config
const dbConfig = require('../../config/db.config')

//buat manggil objek mongoose ( library )
const mongoose =  require('mongoose')

//manggil mongoose nya
mongoose.Promise = global.Promise

//buat objek database
const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.posts = require('./post.model')(mongoose) //buat di post.controller

module.exports = db
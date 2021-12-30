//mendefinisikan semua end point
module.exports = (app) => {
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()

    router.get('/', posts.findAll) //read
    router.post('/', posts.create) //create
    router.get('/:id', posts.findOne) //cari1databyID
    router.put('/:id', posts.update) //update
    router.delete('/:id', posts.delete) //delete

    //regist routes
    app.use('/api/posts', router)
} 
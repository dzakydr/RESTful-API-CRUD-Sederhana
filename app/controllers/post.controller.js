//menambah objek database
const req = require('express/lib/request');
const res = require('express/lib/response');
const db = require('../models')
const Post = db.posts

//function to get data post
exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving posts"
        })
    });
}

//function buat post atau membuat data
//objek data posts
exports.create = (req, res) => {
    const post = new Post({
        nama: req.body.nama,
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
        level: req.body.level,
        published: req.body.published ? req.body.published : false
    })

    //function untuk querynya
    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err)=> {
        res.status(409).send({
            message: err.message || "Some error while create posts"
        })
    });
}

//function buat melihat 1 data berdasarkan data ID
exports.findOne = (req,res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while show posts"
        })
    });
}

//function untuk update data 
exports.update = (req,res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if(!result){
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update posts"
        })
    });
}

//function buat delete data
exports.delete = (req,res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
    .then((result) => {
        if(!result){
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was deleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while delete posts"
        })
    });
}
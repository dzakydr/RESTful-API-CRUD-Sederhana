module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama: String,
            username: String,
            password: String,
            status: String,
            level: String,
            published: Boolean
        },
        {
            timestamps: true
        }
    )

    schema.method("toJSON", function(){
        const {__v , _id , ...object } = this.toObject()
        object.id = _id
        return object
    })

    const Post = mongoose.model("posts", schema)
    return Post
    
}
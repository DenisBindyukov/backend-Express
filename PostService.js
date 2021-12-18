import Post from "./Post.js";

class PostService {

    async create(post) {
        const createdPost = await Post.create(post)
        return createdPost;
    }

    async getAll() {
            //Если не указывать пааметры в функцию find, она вернёт все посты с базы данных.
            const post = await Post.find()
            return post
    }

    async getOne(id) {
        try {
            if (!id) {
                throw new Error('Id not specified')
            }
            //findById метод возвращает конкретный объект по конкретному id
            const post = await Post.findById(id)
            return post
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(post) {
        if (!post._id) {
            throw new Error('Id not specified')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id not specified')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}


export default new PostService();
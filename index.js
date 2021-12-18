import express from 'express'
import mongoose from 'mongoose'

const PORT = 5000;
const DB_URL = "mongodb+srv://den_flex:72983451linkoln@cluster0.gtqrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.status(200).json('Server working')
});

async function startApp(uri, callback) {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

startApp()


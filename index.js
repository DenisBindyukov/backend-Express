import express from 'express';
import mongoose from 'mongoose';
import router from "./userRouter.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://den_flex:72983451linkoln@cluster0.gtqrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(express.json())

app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp()


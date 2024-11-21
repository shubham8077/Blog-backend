const mongoose = require("mongoose")
const express = require("express")
const BlogRoute = require("./Routes/blogRoute")
const UserRoute = require("./Routes/userRoute")
const cors = require("cors")
require("dotenv/config")

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/blog", BlogRoute)
app.use("/user", UserRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.STATES.connected
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

db()
import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import useRoutes from "./Routes/user.js"

dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get('/',(req, res)=>{
res.send("Ma Ashirwad")
})

app.use('/user', useRoutes)

const PORT=process.env.PORT || 5000

const DATABASE = process.env.CONNECTION_URL
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
      
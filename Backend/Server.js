import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import useRoutes from "./Routes/user.js"
import connectDB from "./Config/db.js"
import imageRoutes from "../Backend/Routes/Image.js"
import bodyParser from "body-parser"
import exchangeRoutes from "../Backend/Routes/Exchange.js"

dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: 'http://localhost:5000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true}));

  app.use(bodyParser.json());
  connectDB();


app.get('/',(req, res)=>{
res.send("Ma Ashirwad API is working fine")
})

app.use('/user', useRoutes)
app.use('/image', imageRoutes); 
app.use('/apiexchange', exchangeRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
      
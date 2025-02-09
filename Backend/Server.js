import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import addressRoutes from './routes/addressRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cartRoutes from './routes/cartRoutes.js' 
import wishlistRoutes from './routes/wishlistRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import connectDB from "./Config/db.js"
import bodyParser from "body-parser"
import morgan from "morgan"

dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: '*', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Allowed HTTP methods
  credentials: true}));

app.use(bodyParser.json());
app.use(morgan('tiny'));
connectDB();


app.get('/',(req, res)=>{
res.send("Ma Ashirwad API is working fine")
})

app.use('/api/auth', authRoutes);
app.use('/api/address',addressRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api/product',productRoutes);
app.use('/api/order',orderRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/wishlist',wishlistRoutes);
app.use('/api/review',reviewRoutes);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
      
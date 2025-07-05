import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import manageRoute from './routes/manageRoute.js';
import catagereRouter from './routes/catagereRoute.js';
import slideRouter from './routes/slideRoute.js';
import enquiryRoute from "./routes/enquiryRoute.js";


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/category', manageRoute);
app.use('/api/catagere', catagereRouter);
app.use('/api/slides', slideRouter);
app.use("/api/enquiries", enquiryRoute);


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))

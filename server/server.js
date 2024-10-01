const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const port=3000;


//Import routes
const authRoutes=require('./routes/auth');

//Middleware
app.use(cors());
app.use(express.json());

//Connect to DB
mongoose.connect('mongodb://localhost:27017/ManageHub',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Connected to DB');
})
.catch(err=>{
    console.log(err);
});


//Register routes
app.use('/api/auth',authRoutes);




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
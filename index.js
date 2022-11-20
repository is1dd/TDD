const express = require('express');
const connectDb = require('./Config/db');
const ConsumerRouter = require('./Routes/consumers.routes');
const voucherRouter = require('./Routes/vouchers.routes');
const app = express();
app.use(express.json());
app.use("/ConsumerRouter",ConsumerRouter)
app.use("voucherRouter",voucherRouter);

app.get('/' , (req , res)=>{
        res.send("hello")
})





 
app.listen(3000 , ()=>{
    connectDb();
    console.log("server is listening on port 3000")
})
module.exports = app
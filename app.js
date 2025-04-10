const express = require('express');
const app = express();
let tasks = [];//for further implementation
const port = 5500;
app.get("/login",(req,res,next)=>
{ res.send(`Inside the get API of app_Query`);}
);

app.listen(port,()=>
{
    console.log(`server is listening at ${port}`);//${} works only in console log
}
);
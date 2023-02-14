const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();

const PORT=3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/',function(req,res){
    res.send("server message")
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({"msg":"datarecieved"})
})

app.listen(PORT,function(){
    console.log("server is running"+PORT);
})
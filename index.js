var express=require("express");
var app=express();
var PORT=process.env.PORT ||3000;

app.get("/",function(request,response){
    response.send("Hello World");
});


app.listen(PORT, function(){
    console.log('server is listening on port '+PORT);
});
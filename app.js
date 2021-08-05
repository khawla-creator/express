const express = require ('express');
const app=express(); 


const toogle =(req,res,next)=>{
                    const date= new Date()
   if (date.getDay()===0 || date.getDay()===6 || date.getHours() < 9 || date.getHours() > 17){
                     
                   return res.sendFile(__dirname+'/closeApp/close.html')
                  }
                    next();
}



app.use(toogle)
app.use(express.static('src'))
app.use(express.static('closeApp'))


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))
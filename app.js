const express = require ('express');
const app=express();


// const toogle =(req,res,nxt)=>{
//                     const date= new Date()
//                     if (date.getDate()===0 || date.getDate()===6 || date.getTime <9 || date.getTime >17){return 
//                     req.send(console.log(''))};
//                     next();
// }




app.use(express.static('src'))


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))
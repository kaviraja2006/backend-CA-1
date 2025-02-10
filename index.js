const express=require("express")
const app=express()
const port=3000
app.use(express.json())
app.get("/",async(req,res)=>{
    res.status(200).send("server is running successfully")
})
app.post("/login",async(req,res)=>{
    const {name,password,email,dateofbirth}=req.body
    if (!username || !password){
        res.status(400).send("not found")
    }
    if (!email){
        res.status(400).send("not found")
    }
    if (!dateofbirth){
        res.status(400).send("not found")
    }
    if (pass.length<8 || pass.length>16){
        res.status(400).send("not found")
    }
    res.status(200).send("login successful")
})

app.listen(port,async()=>{
    console.log(`server is running in this ${port}`)
})



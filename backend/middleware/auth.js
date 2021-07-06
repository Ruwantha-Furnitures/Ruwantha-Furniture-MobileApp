const jwt = require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.header("x-access-token")
    if(!token){
        res.send("Please your toekn is outdated")
    }else{
        jwt.verify(token,"jwtSecret",(err,decoded)=>{
            if(err){
                res.json({auth:false,message:"You failed to authenticate"})
            }else{
                req.userID=decoded.id;
                next()
            }
        })
    }
}

module.exports =auth
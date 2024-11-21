const jwt = require("jsonwebtoken")

async function auth(req,res,next) {
    try {
        const token = req.headers("auth-token")
        const tokenVerify = await jwt.verify(token,process.env.SEC)
        if (!tokenVerify) return res.status(500).json({ errors: true, message: "Invalid Token" }) 
        
        next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = auth
const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.getUser = async (req,res) => {
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postUser = async (req, res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (userExist) return res.status(500).json({ errors: true, message: "User already exist" })
        
        req.body.password = await bcrypt.hash(req.body.pasword, 10)
        
        const data = await User.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (!userExist) return res.status(500).json({ errors: true, message: "Email or password is invalid" })

        const passwordVerify = await bcrypt.compare(req.body.password, userExist.password)
        
        if (!passwordVerify) return res.status(500).json({ errors: true, message: "Email or password is invalid" })

        const token = await jwt.sign({ id: userExist._id }, process.env.SEC)
        return res.json({errors:false,data:{token:token,user:userExist}})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
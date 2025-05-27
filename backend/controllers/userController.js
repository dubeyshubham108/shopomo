import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
         
        if(!user) {
            return res.json({ success: false, message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token})
        }
        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message });
    }
}

//ROute for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user is already exist or not
        const  exists = await userModel.findOne({ email})
        if (exists) {
            return res.json({success: false, message: "User already exists"})
        }

        // Validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})


    } catch(error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message})
    }
}

//Route for Admin login
const adminLogin = async (req, res) => {
    try {
        res.json({msg: "Admin Login working"})
    } catch(error) {
        res.status(500).json({ error: "Server Error"})
    }
}

export { loginUser, registerUser, adminLogin }
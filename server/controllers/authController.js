import QuestionStatus from "../models/questionStatusModel.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config();

// user signup controller
export const login = async (req, res) => {
    console.log('login endpoint got hit')
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json("user not found");
    }
    
    const userData = {
        user: {
            username: user.username, id: user._id
        }
    }
    const auth_token = jwt.sign(userData, process.env.JWT_SECRET)
    res.status(200).json({ user, auth_token })

}

// new user signup
export const signup = async (req, res) => {
    console.log('SIGNUP user got hit')
    const {email, password, username, role} = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = {
        email : email,
        password : hashedPassword,
        username:username,
        role:role
    }
    const newUser = new User(user)
    try {
        const oldUser = await User.findOne({ email: email })
        if (oldUser) {
            return res.status(400).json("user already exist");
        }
        const user = await newUser.save()
        const userQuestionStatus = await QuestionStatus.create({userId:user.id})
        const userData = {
            user: {
                username: user.username, id: user._id
            }
        }
        const auth_token = jwt.sign(userData, process.env.JWT_SECRET)
        res.status(200).json({ user, auth_token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
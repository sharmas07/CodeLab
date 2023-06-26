import QuestionStatus from "../models/questionStatusModel.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

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
    const newUser = new User(req.body)
    const email = req.body.email;
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
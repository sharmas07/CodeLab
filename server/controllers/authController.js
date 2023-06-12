import User from "../models/userModel.js";

// user signup controller
export const login = async (req, res) => {
    console.log('login endpoint got hit')
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json("user not found");
    }
  
    res.status(200).json(user)

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

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
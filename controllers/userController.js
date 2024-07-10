const asyncHandler = require("express-async-handler");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc reigster the user
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
        if(!username || !email || !password){
            res.status(400);
            throw new Error("Please fill in all fields");
        }

        const userAvailable = await User.findOne({email});
        if(userAvailable){
            res.status(400);
            throw new Error("User already exists");
        }
        const hashedPassword = await bycrypt.hash(password, 10);
        console.log("Hashed password:" , hashedPassword); 
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        console.log(`User Created: ${user}`);
        if(user){
            res.status(201).json({
                id: user.id,
                email: user.email});
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }

    res.json({message: "Register the user"});;
});

//@desc login user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const user = await User.findOne({email});
    if (user && (await bycrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}
    );
        res.status(200).json({accessToken});
} else {
    res.status(401);
    throw new Error("Invalid email or password");
}
    res.json({message: "login the user"});
});


//@desc current user info
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser,  currentUser }; 
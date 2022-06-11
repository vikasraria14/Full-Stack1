const bcryptjs=require('bcryptjs');
const userRouter=require('express').Router();
const User=require('../models/user')


userRouter.post('/',async (req,res)=>
{
    const {username,name, password}=req.body;

    if(username.length<3||password.length<3)
    {
        return res.status(400).json(
            {
                error:"username and password length must be more than three character"
            }
        )
    }
    const saltRounds=10;
    const passwordHash=await bcryptjs.hash(password,saltRounds)

    const newUser=new User({
        username, name, passwordHash
    })
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(400).json({
        error: 'username must be unique'
        })
    }
    

    const savedUser=await newUser.save()
    res.status(201).json('User Created')
})

userRouter.get('/',async (req,res)=>
{
    const users=await User.find({}).populate('blogs')
    res.json(users)
})

module.exports= userRouter;
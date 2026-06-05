const User=require("../Models/UserModel");

const signupUser = async(req,res) => {
    try{
        const {fullName,email,password } = req.body;
        const NewUser = new User({
            fullName,
            email,
            password,
        });
        const SavedUser = await NewUser.save();
        res.status(200).json({
            message:"User Registered successfully",
            data:SavedUser,
        });
    }
    catch(error){
        res.status(404).json({
            message:"Error Registering in User",
            error:error.message,
        });
    }
};

const loginUser = async(req,res) =>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
             return res.status(400).json({
                message:"Email required for finding user"
            })
        }
        const userDetails = await User.findOne({email:email,password:password});
        if(!userDetails){
            return res.status(404).json({
                message:"User not found",
            })
        }
         return res.status(201).json({
            message:"User found in DB",
            data:userDetails,
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Error in finding user",
            error:err.message
        })
    }
}
module.exports = {
    signupUser,
    loginUser,
}
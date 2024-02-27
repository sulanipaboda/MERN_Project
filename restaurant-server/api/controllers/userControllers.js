const User = require("../models/User");
const { use } = require("../routes/menuRoutes");

//get all users
const getAllUsers = async(req, res) => { 
    try{
        const users = await User.find({});
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//post a new user
const createUser = async(req, res) => {
    const user = req.body;
    const query = { email: user.email };
    
    try {
      const existingUser = await User.findOne(query);
        if(existingUser) {
            return res.status(302).json({ message: "User already exists!" });
      }
      const result = await User.create(user);
      res.status(200).json(result);
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    } 
}

//delete a user
const deleteUser = async(req, res) => {
    const userID = req.params.id;
    try {
        const  deletedUser = await User.findByIdAndDelete(userID);

        //if user not found
        if(!deletedUser){
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get admin
const getAdmin = async (req, res) => {
    const user = req.params.email;
    const query = { email: email }; 

    try {
        const user = await User.findOne(query);
        if(email !== req.decoded.email){
            return res.status(403).send({ message: "Forbidden access" });
        }
        let admin = false;
        if(user){
            admin = user?.role === "admin";
        }
        res.status(200).json({admin})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//make a user as an admin
const makeAdmin = async (req, res) => {
    const userID = req.params.id;
    const { name, email, photoURL, role } = req.body;

    try {
        const updateUser = await User.findByIdAndDelete(
            userID,
            {role: "admin"},
            {new: true, runValidators: true}
        )
        if(!updateUser){
            return res.status(404).json({ message: "User not found"})
        }
        res.status(200).json({admin})

    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getAdmin,
    makeAdmin     
}
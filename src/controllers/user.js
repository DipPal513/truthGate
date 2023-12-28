const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400).json({ success: false, message: "user already exists" });
        }

        user = await User.create({ name, email, password, avatar: { public_id: "sampleid", url: "sampleUrl" } });

        res.status(201).json({ success: true, message: "data send Success!" })
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const getUsers = async (req,res) =>{
    const users = await User.find({})
    res.status(201).json(users);
}

module.exports = { register ,getUsers};
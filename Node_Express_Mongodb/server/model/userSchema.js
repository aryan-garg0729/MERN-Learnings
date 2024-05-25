const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        // required:true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (e) {
        console.log(e);
    }
}

//password hashing
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) { //hash only when password is changed or added first time
        this.password = await bcrypt.hash(this.password, 10)  //what to hash and number of rounds

        this.cpassword = undefined; //now cpassword will not be stored in db
    }
    next();
})

const User = new mongoose.model("User", userSchema);
module.exports = User;
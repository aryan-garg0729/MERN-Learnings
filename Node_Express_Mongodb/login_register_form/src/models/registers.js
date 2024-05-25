const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    phone:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
    // confirmpassword:{
    //     type:String
    // },

    tokens:[{               /*'tokens' is an array of objects 'token' to store token for 
                            each device that logins(multiple devices can stay logged in)*/
        token:{
            type:String,
            require:true
        }
    }]
})


/*methods:for instances
  statics:for collections
*/
employeeSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY); //passing unique id and a secret key to generate signature
        console.log(`token: ${token}`);

        this.tokens = this.tokens.concat({token:token}); //adding token to array tokens using concat function
        await this.save(); //here before calling save() hashing is done by middleware

        return token;

    } catch (e) {
        res.send(e);
    }
}


//hashing middleware
//pre tells before save() is called it should be done
//we cannot use fat arrow func as it does not support this keyword
employeeSchema.pre("save",async function(next){
    if(this.isModified("password")){ //hash only when password is changed or added first time
        this.password = await bcrypt.hash(this.password,10)  //what to hash and number of rounds

        this.confirmpassword = undefined; //now confirmpassword will not be stored in db
    }
    next();
})

const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;
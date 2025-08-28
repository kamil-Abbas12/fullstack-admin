// format to follow for data
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    min:2,
    max:10,
},
email:{
    type:String,
    required:true,
    max:50,
    unique:true,
},
password:{
    type:String,
    required:true,
    min:5,
},
city:String,
country:String,
state:String,
phoneNumber:String,
occupation:String,
transactions:Array,
role:{
    type:String,
    enum:["user","admin","superadmin"],
    default:"admin",
},
},
{
    timestamps:true,
})

const User = mongoose.model("User",UserSchema)
export default User;
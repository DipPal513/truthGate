import { timeStamp } from 'console';
import mongoose from 'mongoose';




const postShema = new mongoose.Schema({
    content: {
        type: String,
        required: true

    },
    complete:{
        type:Boolean,
        default:false    
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

}, timeStamp);

export const UserPost = mongoose.model(
    "UserPost",
    postShema
)
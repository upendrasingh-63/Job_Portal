import mongoose from 'mongoose';

const User = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: {
        bio: {
            type: String
        },
        skills: [{ type: String }],
        resume: { type: String }, // url of resume uploaded on cloudinary will store here
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // company id if user is recruiter
        profilePhoto: {
            type: String,
            default: ""
        }
    }

}, { timestamps: true });

export default mongoose.model('User', User);
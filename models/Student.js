const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    fatherName:{ type: String, required: true },
    motherName:{ type: String, required: true },
    dateOfBirth:{ type: String, required: true },
    bayFormNo:{ type: String, required: true },
    email:{ type: String, required: true },
    phone:{ type: String, required: true },
    address:{ type: String, required: true },
    class:{ type: String, required: true },
    section:{ type: String, required: true },
    fee:{ type: String, required: true },
    roll:{ type: String, required: true },
    registration:{ type: String, required: true },

}, { timestamps: true });

mongoose.models = {};

export default mongoose.model("Student", StudentSchema);
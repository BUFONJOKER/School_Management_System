const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    phone:{ type: String, required: true },
    address:{ type: String, required: true },
    role:{ type: String, required: true },
    qualification:{ type: String, required: true },
    salary:{ type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Staff || mongoose.model('Staff', StaffSchema);
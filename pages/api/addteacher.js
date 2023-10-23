import Teacher from "@/models/Teacher";
import connectDB from "@/middleware/mongoose";



const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const teacher = await Teacher.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                subject: req.body.subject,
                qualification: req.body.qualification,
                experience: req.body.experience,
                salary: req.body.salary,
            });
            res.status(201).json({ success: true, data: teacher });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false });
        }
    }
};


export default connectDB(handler);
  
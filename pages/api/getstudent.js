import Student from "@/models/Student";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const student = await Student.find({});
            res.status(200).json({ success: true, data: student });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false,error:error });
        }
    }
};

export default connectDB(handler);
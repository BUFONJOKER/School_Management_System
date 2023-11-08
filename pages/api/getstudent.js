import Student from "@/models/Student";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const student = await Student.find({});
            res.status(200).json({ student });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false,error:error });
        }
    }
    else{
        res.status(400).json({ success: false, message: "Only GET method allowed" });
    }
};

export default connectDB(handler);
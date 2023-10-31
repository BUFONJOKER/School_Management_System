import Teacher from "@/models/Teacher";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    let teacher;
    if (req.method === "GET") {
        try {
            teacher = await Teacher.find({});
            res.status(200).json({ teacher });
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
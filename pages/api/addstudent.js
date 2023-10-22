import Student from "@/models/Student";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const student = await Student.create({
                name: req.body.name,
                fatherName: req.body.fatherName,
                motherName: req.body.motherName,
                dateOfBirth: req.body.dateOfBirth,
                bayFormNo: req.body.bayFormNo,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                class: req.body.class,
                section: req.body.section,
                fee: req.body.fee,
                roll: req.body.roll,
                registration: req.body.registration,
            });
            res.status(200).json({ success: true, data: student });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false,error:error });
        }
    }
};

export default handler;
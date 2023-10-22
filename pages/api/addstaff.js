import Staff from "@/models/Staff";


const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const staff = await Staff.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                qualification: req.body.qualification,
                role: req.body.role,
                experience: req.body.experience,
                salary: req.body.salary,
            });
            res.status(201).json({ success: true, data: staff });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false });
        }
    }

    else {
        res.status(400).json({ success: false, message: "Only POST method allowed" });
    }
}

export default handler;

import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// POST /api/students
app.post("/api/students", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student record created successfully",
        student: student
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

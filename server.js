
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// Temporary student records
let students = [];

// Task 2: Create student record
app.post("/api/students", (req, res) => {
    const student = req.body;

    students.push(student);

    res.status(201).json({
        message: "Student record created successfully",
        student: student
    });
});

// Task 3: Get all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// Task 3: Get student by ID
app.get("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});


/* Task 4: Update Student Details */
app.put("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students[index] = {
        ...students[index],
        ...req.body,
        id: id
    };

    res.json({
        message: "Student updated successfully",
        student: students[index]
    });
});

/* Task 5: Delete Student Record */
app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students[index];

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});

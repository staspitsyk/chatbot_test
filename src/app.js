const express = require("express");
const bodyPareser = require("body-parser");
const errorHandler = require("./common/middlewares/error-handler");
const config = require("./config");

const studentsRoutes = require("./modules/students/students.routes");
const teachersRoutes = require("./modules/teachers/teachers.routes");
const groupsRoutes = require("./modules/groups/groups.routes");
const lessonsRoutes = require("./modules/lessons/lessons.routes");


const app = express();
app.use(bodyPareser.json());

app.use("students", studentsRoutes);
app.use("teachers", teachersRoutes);
app.use("groups", groupsRoutes);
app.use("lessons", lessonsRoutes);
app.use(errorHandler);

const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
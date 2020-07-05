const express = require("express");
const passport = require("passport");
const bodyPareser = require("body-parser");
const errorHandler = require("./common/middlewares/error-handler");
const  strategy = require('./common/passport/auth.strategy');
const config = require("./config");

const studentsRoutes = require("./modules/students/students.routes");
const teachersRoutes = require("./modules/teachers/teachers.routes");
const groupsRoutes = require("./modules/groups/groups.routes");
const lessonsRoutes = require("./modules/lessons/lessons.routes");
const authRoutes = require("./modules/auth/auth.routes");


const app = express();
app.use(bodyPareser.json());

app.use("students", studentsRoutes);
app.use("teachers", teachersRoutes);
app.use("groups", groupsRoutes);
app.use("lessons", lessonsRoutes);

passport.use(strategy);
app.use(passport.initialize());
app.use('/auth', authRoutes);

app.use(errorHandler);

const PORT = config.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
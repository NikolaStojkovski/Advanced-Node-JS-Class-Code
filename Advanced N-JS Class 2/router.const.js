import { Router } from "express";
import studentRoutes from "./Routes/student.routes.js";
import courseRouter from "./Routes/courses.routes.js";

const router = Router();

router.use("/courses", courseRouter);

router.use("/students", studentRoutes);

export default router;

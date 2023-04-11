import { Router } from "express";
import CourseController from "../Controllers/course.controller.js";

const router = Router();

router.get("/", CourseController.getAllCourses);

router.post("/", CourseController.addNewCourse);

router.put("/:id", CourseController.updateCourse);

router.delete("/:id", CourseController.deleteCourse);

router.patch("/:id/students", CourseController.updateStudents);

export default router;

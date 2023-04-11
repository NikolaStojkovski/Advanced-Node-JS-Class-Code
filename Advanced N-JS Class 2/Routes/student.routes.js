import { Router } from "express";
import StudentController from "../Controllers/student.controller.js";
const router = Router();

router.get("/:id?", StudentController.getAllStudents);

router.post("/", StudentController.addNewStudent);

router.put("/:id", StudentController.updateStudent);

router.delete("/:id", StudentController.deleteStudent);

export default router;

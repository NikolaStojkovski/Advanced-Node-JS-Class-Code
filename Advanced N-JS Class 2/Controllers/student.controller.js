import StudentService from "../Services/student.service.js";

export default class StudentController {
  static async getAllStudents(req, res) {
    const id = req.params.id;
    try {
      if (id) {
        const student = await StudentService.getStudentById(id);
        res.status(200).send(student);
      } else {
        const students = await StudentService.getAllStudents();
        res.status(200).send(students);
      }
    } catch (error) {
      res.status(500).send(`Error while fetching students`);
    }
  }

  static async addNewStudent(req, res) {
    try {
      const student = await StudentService.addNewStudent(req.body);
      res.status(201).send(student);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateStudent(req, res) {
    try {
      const updatedStudent = await StudentService.updateStudent(
        req.params.id,
        req.body
      );
      res.status(200).send(updatedStudent);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteStudent(req, res) {
    try {
      await StudentService.deleteStudent(req.params.id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

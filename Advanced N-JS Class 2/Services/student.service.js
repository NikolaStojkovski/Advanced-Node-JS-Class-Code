import Student from "../Models/student.model.js";
import Course from "../Models/course.model.js";

export default class StudentService {
  static async getAllStudents() {
    const students = await Student.find({});

    return students;
  }

  static async getStudentById(id) {
    const student = await Student.findById(id).lean();
    const course = await Course.findById(student.courseId).lean();

    const fullStudent = {
      ...student,
      course,
    };
    return fullStudent;
  }

  static async addNewStudent(studentData) {
    const student = new Student(studentData);

    const response = await student.save();

    return response;
  }

  static async updateStudent(studentId, updateData) {
    const student = await Student.findById(studentId);

    if (!student) throw new Error(`Student with id: ${studentId} doesnt exist`);

    const keys = Object.keys(updateData);

    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") student[key] = updateData[key];
    });

    const updatedStudent = await student.save();

    return updatedStudent;
  }

  static async deleteStudent(studentId) {
    await Student.findByIdAndDelete(studentId);
  }
}

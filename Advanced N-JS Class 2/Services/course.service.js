import Course from "../Models/course.model.js";
import StudentService from "../Services/student.service.js";

export default class CourseService {
  static async getAllCourses() {
    const courses = await Course.find({});
    return courses;
  }

  static async addNewCourse(courseData) {
    const course = new Course(courseData);
    const createdCourse = await course.save();
    return createdCourse;
  }

  static async updateCourse(courseId, updateData) {
    const course = await Course.findById(courseId);

    if (!course) throw new Error(`Course with id: ${courseId} doesnt exist`);

    const keys = Object.keys(updateData);
    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") course[key] = updateData[key];
    });

    const updatedCourse = await course.save();

    return updatedCourse;
  }

  static async deleteCourse(courseId) {
    await Course.findByIdAndDelete(courseId);
  }

  static async updateStudents(courseId, studentIds) {
    const course = Course.findById(courseId);

    if (!course) throw new Error(`Course with id: ${courseId} doesnt exist`);

    course.studentIds = studentIds;

    for (const studentId of studentIds) {
      await StudentService.updateStudent(studentId, { course: courseId });
    }

    await course.save();

    return course;
  }
}

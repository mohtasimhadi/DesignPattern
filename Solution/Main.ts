import Data from "./Data"
import Student from "./Student"
import Teacher from "./Teacher"
import Fetcher from "./Fetcher"

let student: Student = new Student()
let teacher: Teacher = new Teacher()
let data: Data = new Data()

let fetcher: Fetcher = new Fetcher([student, teacher], data)


console.log("Try 1:");
data.setCourseNumber("SWE 4501")
data.setTopicName("Observer Pattern")
data.setTeacherName("Nazmul Haque")
fetcher.fetch();
student.show();
teacher.show();


console.log("Data Changing");
data.setCourseNumber("SWE 4502")
data.setTopicName("Lab 01")
data.setTeacherName("Mamun Rashid")
fetcher.fetch();
student.show();
teacher.show();
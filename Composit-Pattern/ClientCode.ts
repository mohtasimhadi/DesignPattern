import Files from './Files'
import Folder from './Folder'

let strategy=new Files('Strategy Pattern','ppt')
let oobserver=new Files('Observer Pattern','pdf')
let midSyllabus=new Files('MidSyllabus','doc')
let coomposite=new Files('Component Pattern','ppt')
let assignment1=new Files('Assignment-1','pdf')
let assignment2=new Files('Assignment-2','pdf')
let readMe=new Files('readMe','doc')
let midterm=new Folder('Mid Exam','folder')
let finalExam=new Folder('Final Exam','folder')
let leectures=new Folder('Lecturers','folder')
let assignmets=new Folder('Assignment Exam','folder')
let designPattern=new Folder('Design Pattern','folder')

midterm.addItem(strategy)
midterm.addItem(oobserver)

console.log(midterm.singleClick())
console.log(midterm.doubleClick())

midterm.addItem(midSyllabus)

finalExam.addItem(coomposite)
finalExam.addItem(finalExam)

leectures.addItem(midterm)
leectures.addItem(finalExam)

assignmets.addItem(assignment1)
assignmets.addItem(assignment2)

designPattern.addItem(leectures)
designPattern.addItem(readMe)
designPattern.addItem(assignmets)

designPattern.singleClick()
console.log(designPattern.doubleClick())

designPattern.removeItem(readMe)
designPattern.doubleClick()
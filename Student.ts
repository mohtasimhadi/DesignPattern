import Data from "./Data";
import { Observer } from "./Observer";

class Student implements Observer{
    
    data = {} as Data

    private showTime = (): string => {
        return this.data.getTime.toLocaleString()
    }

    private showOthers = (): string => {
        return `Course No: ${this.data.getCourseNumber}\n`
            + `Topic: ${this.data.getTopicName}\n`
            + `Teacher: ${this.data.getTeacherName}`
    }

    update(data: Data) {
        this.data = data
    }

    show = (): void => {
        console.log("Student View:")
        console.log(this.showOthers())
        console.log(this.showTime())
    }
}

export default Student
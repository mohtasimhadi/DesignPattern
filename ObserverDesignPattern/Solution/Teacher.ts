import Data from "./Data"
import { Observer } from "./Observer"

class Teacher implements Observer {
    
    data = {} as Data

    private showTime = (): string => {
        return this.data.getTime.toLocaleString()
    }

    private showOthers = (): string => {
        return `Course No: ${this.data.getCourseNumber} `
        + `Topic: ${this.data.getTopicName} `
        + `Teacher: ${this.data.getTeacherName}`
    }

    update(data: Data){
        this.data = data
    }

    show = (): void => {
        console.log("Teacher View")
        console.log(this.showOthers())
        console.log(this.showTime())
    }
}

export default Teacher
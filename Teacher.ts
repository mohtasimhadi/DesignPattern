import Data from "./Data"
import { Observer } from "./observer"

class Teacher implements Observer {
    
    data = {} as Data

    private showTime = (): string => {
        return this.data.getTime.toLocaleString('de-DE', {hour12: false})
    }

    private showOthers = (): string => {
        return `Course No: ${this.data.courseNumber} `
        + `Topic: ${this.data.topicName} `
        + `Teacher: ${this.data.teacherName}`
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
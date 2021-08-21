import Observer from './Observer'
import Subject from './Subject'

class BinaryObserver extends Observer {
    constructor (subject: Subject) {
        super()
        this.subject = subject
        this.subject.attach(this)
    }

    public update(): void {
        console.log('Binary String: '+(this.subject.getState()>>> 0).toString(2) )
    }
}

export default BinaryObserver
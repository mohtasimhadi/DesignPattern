import Observer from './Observer'
import Subject from './Subject'

class OctalObserver extends Observer {
    constructor (subject: Subject) {
        super()
        this.subject = subject
        this.subject.attach(this)
    }

    public update(): void {
        console.log('Octal String: '+(this.subject.getState()>>> 0).toString(8) )
    }
}

export default OctalObserver
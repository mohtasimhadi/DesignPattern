import Observer from './Observer'
import Subject from './Subject';

class HexaObserver extends Observer {
    constructor (subject: Subject) {
        super()
        this.subject = subject
        this.subject.attach(this)
    }

    public update(): void {
        console.log('Hexa String: '+(this.subject.getState()>>> 0).toString(16) )
    }
}

export default HexaObserver
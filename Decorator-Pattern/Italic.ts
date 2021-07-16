import Decorator from './Decorator'

class Italic extends Decorator {
    
    getModifiedText(): string {
        return super.getModifiedText.italics()
    }
}

export default Italic
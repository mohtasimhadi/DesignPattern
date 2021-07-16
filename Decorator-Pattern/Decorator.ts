import Text from "./Text"

abstract class Decorator implements Text {
    
    text: Text

    constructor(text : Text) {
        this.text = text
    }

    getModifiedText(): string {
        return this.text.getModifiedText()
    }
}

export default Decorator
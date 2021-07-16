import Text from "./Text"

class Plain implements Text {
    text: string

    constructor (text: string) {
        this.text = text
    }

    getModifiedText(): any {
        return this.text
    }
}

export default Plain
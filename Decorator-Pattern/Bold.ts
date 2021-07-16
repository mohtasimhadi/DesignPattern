import Decorator from "./Decorator"

class Bold extends Decorator {

    getModifiedText():string {
        return super.getModifiedText().bold()
    }
}

export default Bold
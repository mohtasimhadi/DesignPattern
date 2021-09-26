import Component from "./Component";

class Files extends Component {
    private name: string
    private type: string
    
    constructor(name: string, type: string) {
        super()
        this.name = name
        this.type = type
    }

    doubleClick(): string {
        return this.name+this.type
    }

    isComposite(): boolean {
        return false
    }

    singleClick(): string {
        return `Name ${this.name} Type ${this.type}`
    }
}

export default Files
import Node from "./Node"

class Files implements Node {

    private name: string
    private type: string

    constructor(name: string, type: string) {
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
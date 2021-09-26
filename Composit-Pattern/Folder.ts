import InnerNode from "./InnerNode"
import Node from './Node'

class Folder implements InnerNode {

    private nodeList: Array<Node> = new Array<Node>()
    private name: String
    private type: String

    constructor(name: String, type: String) {
        this.name = name
        this.type = type
    }
    
    public addItem(node: Node): void {
        this.nodeList.push(node)
    }

    public removeItem(node: Node): void {
        const nodeIndex = this.nodeList.indexOf(node) 
        this.nodeList.splice(nodeIndex, 1) 
    }

    public doubleClick(): string {
        let result = []
        result.push(`${this.name} Folder is opened`)
        for (const node of this.nodeList) {
            result.push(node.singleClick())
        }
        return `${result.join('\n')}` 
    }

    public isComposite(): boolean {
        return true 
    }

    public singleClick(): string {
        return `Name ${this.name} Type ${this.type}` 
    }

}

export default Folder
import Node from "./Node"

interface InnerNode extends Node{
    addItem(node: Node): void
    removeItem(node: Node): void
}

export default InnerNode
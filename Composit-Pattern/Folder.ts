import Component from "./Component"

class Folder extends Component {
    protected children: Component[] = [] 
    protected name: string 
    protected type: string 

    constructor(name: string, type: string) {
        super() 
        this.name = name 
        this.type = type 
    }
    public addItem(component: Component): void {
        this.children.push(component) 
    }
    public doubleClick(): string {
        let result = []
        result.push(`${this.name} Folder is opened`)
        for (const child of this.children) {

            result.push(child.singleClick())
        }
        return `${result.join('\n')}` 
    }

    public isComposite(): boolean {
        return true 
    }

    public singleClick(): string {
        return `Name ${this.name} Type ${this.type}` 
    }
    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component) 
        this.children.splice(componentIndex, 1) 

        // @ts-ignore
        component.setParent(null) 
    }

}

export default Folder
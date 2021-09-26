abstract class Component {
    protected parent: Component | undefined
    public setParent(parent: Component){
        this.parent = parent
    }

    public addItem(component: Component):void{}
    abstract isComposite(): boolean
    abstract singleClick(): string
    abstract doubleClick(): string
}

export default Component
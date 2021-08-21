import Observer from "./Observer"

class Subject {
    private observers: Array<Observer> = new Array<Observer>()
    private state: number

    public getState(): number {
        return this.state
    }

    public setState(state: number): void {
        this.state = state
        this.notifyAllObserver()
    }

    public attach(observer: Observer): void {
        this.observers.push(observer)
    }

    public notifyAllObserver(): void{
        for (let i = 0; i<this.observers.length; i++) {
            this.observers[i].update()
        }
    }
}

export default Subject
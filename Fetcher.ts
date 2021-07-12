import Data from "./Data";
import { Observer } from "./Observer";

class Fetcher {
    data: Data
    observers: Observer[]

    constructor(observers: Observer[], data: Data){
        this.observers = observers
        this.data = data
    }

    fetch = () => {
        this.observers.forEach(observer => {
            observer.update(this.data)
        })
    }
}

export default Fetcher
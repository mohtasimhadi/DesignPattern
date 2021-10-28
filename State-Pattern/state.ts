interface State {
    doAction(context: Context): void
}

class Context {

    private state: State
    constructor() {
        this.state = null
    }
    setState(state: State): void {
        this.state = state
    }

    getState(): State {
        return this.state
    }
}

class StartState implements State {
    doAction(context: Context): void{
        console.log('Player is in start state')
        context.setState(this)
    }
}

class StopState implements State {
    doAction(context: Context): void{
        console.log('Player is in stop state')
        context.setState(this)
    }
}

let context: Context = new Context()
let startState: StartState = new StartState()
startState.doAction(context)
context.getState()

let stopState: StopState = new StopState()
stopState.doAction(context)
context.getState()
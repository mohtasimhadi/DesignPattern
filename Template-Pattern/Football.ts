import Game from "./Game"

class Football extends Game {
    endPlay(): void {
        console.log('Football Game Finished!')
    }

    initialize(): void {
        console.log('Football Game Initialized! Start Playing')
    }

    startPlay(): void {
        console.log('Football Game Started! Enjoy the game!')
    }
}

export default Football
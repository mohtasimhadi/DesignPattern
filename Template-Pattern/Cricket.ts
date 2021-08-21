import Game from "./Game"

class Cricket extends Game {
    endPlay(): void {
        console.log('Cricket Game Finished!')
    }

    initialize(): void {
        console.log('Cricket Game Initialized! Start Playing')
    }

    startPlay(): void {
        console.log('Cricket Game Started! Enjoy the game!')
    }
}

export default Cricket
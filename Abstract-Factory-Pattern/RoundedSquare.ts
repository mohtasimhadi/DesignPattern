import Shape from "./Shape"

class RoundedSquare implements Shape {
    draw(): void {
        console.log('Inside RoundedSquare: draw() method')
    }
}

export default RoundedSquare
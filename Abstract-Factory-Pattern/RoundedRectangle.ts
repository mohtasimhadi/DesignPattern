import Shape from "./Shape"

class RoundedRectangle implements Shape {
    draw(): void {
        console.log('Inside RoundedRectangle: draw() method')
    }
}

export default RoundedRectangle
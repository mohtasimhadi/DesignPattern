import Shape from "./Shape"

class Square implements Shape {
    draw(): void {
        console.log('Inside Square: draw() method')
    }
}

export default Square
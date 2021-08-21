import Shape from "./Shape"

class Square implements Shape {
    draw(): void {
        console.log('Square::draw()')
    }
}

export default Square
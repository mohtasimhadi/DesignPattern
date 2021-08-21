import Shape from "./Shape"

class Circle implements Shape {
    draw(): void {
        console.log('Circle::draw()')
    }
}

export default Circle
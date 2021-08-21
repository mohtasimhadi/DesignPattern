import Shape from "./Shape"

class Rectangle implements Shape {
    draw(): void {
        console.log('Rectangle::draw()')
    }
}

export default Rectangle
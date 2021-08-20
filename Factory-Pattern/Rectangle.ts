import Shape from "./Shape"

class Rectangle implements Shape {
    draw(): void {
        console.log('Inside Rectangle: draw() method')
    }
}

export default Rectangle
import Shape from "./Shape"

class Circle implements Shape {
    draw(): void {
        console.log('Inside Circle: draw() method')
    }
}

export default Circle
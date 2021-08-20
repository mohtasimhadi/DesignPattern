import Shape from "./Shape"

abstract class ShapeDecorator implements Shape {

    protected decoratedShape: Shape

    constructor (decoratedShape: Shape) {
        this.decoratedShape = decoratedShape
    }

    draw(): void{
        this.decoratedShape.draw()
    }
}

export default ShapeDecorator
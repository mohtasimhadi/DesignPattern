import Circle from "./Circle"
import Rectangle from "./Rectangle"
import Shape from "./Shape"
import Square from "./Square"

class ShapeMaker {
    private circle: Shape
    private rectangle: Shape
    private square: Shape
    constructor() {
        this.circle = new Circle()
        this.square = new Square()
        this.rectangle = new Rectangle()
    }

    public drawCircle(): void {
        this.circle.draw()
    }

    public drawRectange(): void {
        this.rectangle.draw()
    }

    public drawSquare(): void {
        this.square.draw()
    }
}

export default ShapeMaker
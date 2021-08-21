import AbstractFactory from "./AbstractFactory"
import Rectangle from "./Rectangle"
import Shape from "./Shape"
import Square from "./Square"

class ShapeFactory extends AbstractFactory{
    getShape(shapeType: String): Shape {
        if (shapeType == 'rectangle') {
            return new Rectangle()
        } else if (shapeType == 'square') {
            return new Square
        } else {
            return null
        }
    }
}

export default ShapeFactory
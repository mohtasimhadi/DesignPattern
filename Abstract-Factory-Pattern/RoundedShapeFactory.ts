import AbstractFactory from "./AbstractFactory"
import RoundedRectangle from "./RoundedRectangle"
import RoundedSquare from "./RoundedSquare"
import Shape from "./Shape"

class RoundedShapeFactory extends AbstractFactory {
    getShape(shapeType: String): Shape {
        if (shapeType == 'square') {
            return new RoundedSquare()
        } else if (shapeType == 'rectangle') {
            return new RoundedRectangle()
        } else {
            return null
        }
    }
}

export default RoundedShapeFactory
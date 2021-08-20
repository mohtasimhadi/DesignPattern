import Circle from "./Circle"
import Rectangle from "./Rectangle"
import Shape from "./Shape"
import Square from "./Square"

class ShapeFactory {
    
    public getShape(shapeType: String): Shape {
        
        if (shapeType == 'circle') {
            return new Circle
        }

        if (shapeType == 'square') {
            return new Square
        }

        if (shapeType == 'rectangle') {
            return new Rectangle
        }

        return null
    }
}

export default ShapeFactory
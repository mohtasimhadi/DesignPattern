import Shape from "./Shape"

abstract class AbstractFactory {
    abstract getShape(shapeType: String): Shape
}

export default AbstractFactory
import AbstractFactory from "./AbstractFactory"
import RoundedShapeFactory from "./RoundedShapeFactory"
import ShapeFactory from "./ShapeFactory"

class FactoryProducer {
    static getFactory(rounded: Boolean): AbstractFactory {
        if (rounded) {
            return new RoundedShapeFactory()
        } else {
            return new ShapeFactory()
        }
    }
}

export default FactoryProducer
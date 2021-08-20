import Shape from "./Shape"
import ShapeFactory from "./ShapeFactory"

const shapeFactory: ShapeFactory = new ShapeFactory()

const shape1: Shape = shapeFactory.getShape('circle')
const shape2: Shape = shapeFactory.getShape('square')
const shape3: Shape = shapeFactory.getShape('rectangle')

shape1.draw()
shape2.draw()
shape3.draw()
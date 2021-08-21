import AbstractFactory from "./AbstractFactory"
import FactoryProducer from "./FactoryProducer"
import Shape from "./Shape"

let shapeFactory: AbstractFactory = FactoryProducer.getFactory(false)

let shape1: Shape = shapeFactory.getShape('rectangle')
let shape2: Shape = shapeFactory.getShape('square')

let shapeFactory1: AbstractFactory = FactoryProducer.getFactory(true)

let shape3: Shape = shapeFactory1.getShape('rectangle')
let shape4: Shape = shapeFactory1.getShape('square')

shape1.draw()
shape2.draw()
shape3.draw()
shape4.draw()
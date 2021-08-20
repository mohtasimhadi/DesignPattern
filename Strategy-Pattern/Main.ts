import Context from './Context'
import OperationAdd from './OperationAdd'
import OperationSubtract from './OperationSubtract'
import OperationMultiply from './OperationMultiply'

let context = new Context(new OperationAdd())
console.log(context.executeStrategy(10, 5))

context = new Context(new OperationSubtract())
console.log(context.executeStrategy(10, 5))

context = new Context(new OperationMultiply())
console.log(context.executeStrategy(10, 5))
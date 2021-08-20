import { Strategy } from "./Strategy"

class OperationMultiply implements Strategy {
    doOperation(num1: number, num2: number): number {
        return num1 * num2
    }
}

export default OperationMultiply
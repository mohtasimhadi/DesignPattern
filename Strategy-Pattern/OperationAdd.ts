import { Strategy } from "./Strategy"

class OperationAdd implements Strategy {
    doOperation(num1: BigInteger, num2: BigInteger): BigInteger {
        return num1 + num2
    }
}

export default OperationAdd
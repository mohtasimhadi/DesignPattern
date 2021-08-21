import Order from "./Order"
import Stock from "./Stock"

class SellStock implements Order {
    private abcStock: Stock
    constructor(abcStock: Stock) {
        this.abcStock = abcStock
    }

    execute():void {
        this.abcStock.sell()
    }
}

export default SellStock
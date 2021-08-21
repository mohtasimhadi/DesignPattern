import Order from "./Order"
import Stock from "./Stock"

class BuyStock implements Order {
    private abcStock: Stock
    constructor(abcStock: Stock) {
        this.abcStock = abcStock
    }

    execute():void {
        this.abcStock.buy()
    }
}

export default BuyStock
import Order from "./Order"

class Broker {
    private orderList: Array<Order> = new Array<Order>()

    public takeOrder(order: Order): void {
        this.orderList.push(order)
    }

    public placeOrders(): void {
        for (let order of this.orderList){
            order.execute()
        }

        this.orderList = []
    }
}

export default Broker
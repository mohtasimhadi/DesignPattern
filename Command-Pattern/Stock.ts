class Stock {
    private name: String = "ABC"
    private quantity: number = 10

    public buy(): void {
        console.log("Stock [Name: "+this.name+" Quantity: "+this.quantity+"] bought")
    }

    public sell(): void {
        console.log("Stock [Name: "+this.name+" Quantity: "+this.quantity+"] sold")
    }
}

export default Stock
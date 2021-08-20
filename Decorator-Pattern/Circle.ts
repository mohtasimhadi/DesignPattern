import Shape from "./Shape"

class Circle implements Shape {
    draw(): void {
        console.log('Shape: Circle')
    }
}

export default Circle
class SingleObject {
    static instance: SingleObject = new SingleObject()

    private constructor(){

    }

    public static getInstance(): SingleObject {
        return this.instance
    }

    public showMessage(): void {
        console.log('Hello World!')
    }
}

export default SingleObject
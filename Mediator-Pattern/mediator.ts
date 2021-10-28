class ChatRoom {
    static showMessage(user: User, message: string): void {
        console.log('date'+ user.getName()+'message')
    }
}

class User {
    private name: string

    constructor (name: string){
        this.name = name
    }

    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
    
    sendMessage(message: string): void {
        ChatRoom.showMessage(this, message)
    }
}

const robert: User = new User('Robert')
const john: User = new User('John')

robert.sendMessage('Hi! John!')
john.sendMessage('Hello! Robert!')
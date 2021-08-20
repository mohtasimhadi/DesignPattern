import ConcreteSubject from "./ConcreteSubject"
import ConcreteObserverA from "./ConcreteObserverA"
import ConcreteObserverB from "./ConcreteObserverB"

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

// subject.someBusinessLogic();
// subject.someBusinessLogic();

subject.detach(observer2);

// subject.someBusinessLogic();
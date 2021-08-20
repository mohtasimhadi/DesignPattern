Observer pattern is used when there is one to many relationship between objects such as if one object is modified, its dependent objects are to be notified automatically.

Three actor classes-
1.	Subject
2.	Observer
3.	Client

Subject is an object having methods to attach and detach observers to a client object. We have created an abstract class Observer and a concrete class Subject that is extending class Observer.
ObserverPatternDemo, our demo class will use Subject and concrete class object to show observer pattern in action.

The above piece of code is a module that has a singleton class StateUtility and default exports the instance of the same class.

Let's dive deeper into the class StateUtility to understand how it resolves to become a singleton class:

It consists of constructor and two class methods called getPropertyByName and setPropertyValue. Both of these class method are pretty self explanatory: one gets the property's value and the other sets its value.
Next, we have the constructor function. It is a function that gets invoked whenever we create a new of object of this class.
But here is a catch: for a class to be a singleton we need to make sure that it creates only one instance, and that's all.
To make sure that this happens, we simply create a global variable called instance. We define it at the top of the module. This variable acts as a checker. We add a condition in the constructor function such that if instance variable has any value (that is, the object of the StateUtility class) then throw an error or else assign instance to the current class instance (the this object).
In this example, we implemented the class StateUtility so that it can expose and alter the globalState variable.
We make sure that we don't expose the globalState. We expose them using the class methods of StateUtility. In this way, we protect the global state from being altered directly.
Finally, we create the instance of the class as follows: let stateUtilityInstance = Object.freeze(new StateUtility());.
We have used Object.freeze so that no other class/component/module is able to modify the exposed stateUtilityInstance.
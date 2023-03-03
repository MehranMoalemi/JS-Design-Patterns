let Task = function(name, description, finished, dueDate) {

    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
}

let TaskBuilder = function () {

    let name;
    let description;
    let isFinished = false;
    let dueDate;

    return {
        setName: function (name) {
            this.name = name;
            return this;
        },
        setDescription: function (description) {
            this.description = description;
            return this;
        },
        setFinished: function (finished) {
            this.finished = finished;
            return this;
        },
        setDueDate: function (dueDate) {
            this.dueDate = dueDate;
            return this;
        },
        build: function () {
            return new Task(name, description, isFinished, dueDate);
        }
    };
};

let task = new TaskBuilder().setName('Task A').setDescription('finish book')
    .setDueDate(new Date(2019, 5, 12));
console.log(task);


//**description */


// In this example, we have a TaskBuilder which generates Task objects.

let Task = function(name, description, finished, dueDate) {

    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
}


// This is a Task object. It has four attributes: name, description, finished, and dueDate.

return {
    setName: function (name) {
        this.name = name;
        return this;
    },
    ...    


// The TaskBuilder returns functions which set the four attributes.
// Note that each function returns this, the reference to the current object.
// This way we can chain the function calls.The chain of function calls is known as fluent API

let task = new TaskBuilder().setName('Task A').setDescription('finish book')
    .setDueDate(new Date(2019, 5, 12));
console.log(task);

// We create a task using TaskBuilder.

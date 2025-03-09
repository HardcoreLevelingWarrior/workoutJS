class toDoList {
    constructor() {
        const PENDING = 0;
        const FULFILLED = 1;
        const REJECTED = 2;
    }
    add(taskName) {
        ["task" + toDoList.size()] = {
            name: taskName,
            state: PENDING
        }

    }

}
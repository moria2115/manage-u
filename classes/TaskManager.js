export default class TaskManager {
    constructor() {
        this.tasksArr = [];
    }
    addTask(newDescription) {
        this.tasksArr.push(newDescription);
    }
    deleteTask(id) {
        this.tasksArr = this.tasksArr.filter((task) => task.id != id);
    }
    updateTaskDescription(id, newDescription) {
        let taskToUpdate = this.tasksArr.find((task) => task.id == id);
        let taskIndexToUpdate = this.tasksArr.indexOf(taskToUpdate);
        this.tasksArr[taskIndexToUpdate].description = newDescription;
    }
    completeTask(id) {
        let taskToComplete = this.tasksArr.find((task) => task.id == id);
        let taskIndexToComplete = this.tasksArr.indexOf(taskToComplete);
        this.tasksArr[taskIndexToComplete].completed = true;
    }

}
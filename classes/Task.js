export default class Task {
    constructor(description) {
        this.completed = false;
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
    }
    get(propName) {
        return this[propName];
    }
    set(propName, value) {
        this[propName] = value;
    }
}
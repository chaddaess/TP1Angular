import {TodoStatus} from "../todo-status";

export class Todo {
  constructor(public name = '', public content = '',public status:TodoStatus='waiting') {}
}

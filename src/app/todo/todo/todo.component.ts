import {Component, inject, signal, WritableSignal} from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [FormsModule],
})
export class TodoComponent {
  private todoService = inject(TodoService);
  inProgressTodos=signal<Todo[]>([]);
  completedTodos=signal<Todo[]>([]);
  newTodos=signal<Todo[]>([])
  todo = new Todo();
  constructor() {
  }
  addTodo() {
    this.todoService.addTodo(this.newTodos,this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo,list:WritableSignal<Todo[]>) {
    console.log("component")
    this.todoService.deleteTodo(list,todo);
  }

  startTodo(todo:Todo){
    this.todoService.startTodo(this.newTodos,this.inProgressTodos,todo)
  }
  completeToDo(todo:Todo){
    this.todoService.completeTodo(this.inProgressTodos,this.completedTodos,todo)
  }

}

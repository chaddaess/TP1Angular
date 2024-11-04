import {Injectable, inject, WritableSignal} from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';
import _default from "chart.js/dist/core/core.interaction";
import index = _default.modes.index;

let n = 1;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private loggerService = inject(LoggerService);

  private newTodos: Todo[] = [];
  /**
   *Permet d'ajouter un todo à la liste des nouveaux todos
   *
   *
   * @param newToDos
   * @param todo
   */
  addTodo(newToDos:WritableSignal<Todo[]>,todo: Todo): void {
    this.newTodos.push(todo);
    newToDos.set([...newToDos(),todo])
  }

  /**
   * Delete le todo s'il existe de la liste convenable
   *
   * @returns boolean
   * @param todoList
   * @param todo
   */
  deleteTodo(todoList:WritableSignal<Todo[]>,todo: Todo): boolean {
    const index = todoList().indexOf(todo)
    if (index > -1) {
      todoList().splice(index,1)
      return true;
    }
    return false;
  }

  /**
   * Permet de marquer le toodo 'in progress' et le transférer vers la liste des todos  en cours
   * @param newToDos
   * @param inProgressTodos
   * @param todo
   */
  startTodo(newToDos:WritableSignal<Todo[]>,inProgressTodos:WritableSignal<Todo[]>,todo:Todo){
    todo.status="in progress"
    let index=newToDos().indexOf(todo)
    if(index>-1){
      newToDos().splice(index,1)
      inProgressTodos().push(todo)
      return true;
    }
    return false;
  }

  /**
   * Permet de marquer le todo 'done' et le transférer vers la liste des todos complétés
   * @param inProgressToDos
   * @param completedTodos
   * @param todo
   */
  completeTodo(inProgressToDos:WritableSignal<Todo[]>,completedTodos:WritableSignal<Todo[]>,todo:Todo){
    todo.status="done"
    let index=inProgressToDos().indexOf(todo)
    if(index>-1){
      inProgressToDos().splice(index,1)
      completedTodos().push(todo)
      return true;
    }
    return false;
  }


  // /**
  //  * Logger la liste des todos
  //  */
  // logTodos() {
  //   this.loggerService.logger(this.newTodos);
  // }
}

import {Injectable} from '@angular/core'
import { Todo } from './todo.module'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  todos:Todo[] = [
    // new Todo('this is a test!',true),
    // new Todo('fewfddesfesfesfesfes fsef s fse s f sef sef s f f sefsff sef fe se fse fsfwfeff wf fewfefefwefsfesf asvseseesvsevsevsevevsvesvesvseseves cec ee  cec c e ceec vefefewf efefe')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number,updatedTodo:Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.module';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  todos!:Todo[]


  constructor(private dataService:DataService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert("Please enter the text")
    this.dataService.addTodo(new Todo(form.value.text))
    // console.log("FORM SUBMITTED");
    // console.log(form); 
  }
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo){
    console.log("eiei");
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  } 
  
  editTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    
    let dialogRef = this.dialog.open(EditItemComponent, {
      width: '500px',
      data:todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }
}

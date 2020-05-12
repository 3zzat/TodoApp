import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1, 'learn to learn', false, new Date()),
  //   new Todo(1,  'learn to learn2', false, new Date()),
  //   new Todo(1, 'learn to learn3', false, new Date()),
  // ];
  // todo = {
  //   id : 1,
  //   description : 'learn to learn'
  // }

  message: string;
  username: string;
  todos: Todo[];
  constructor(private todoDataService: TodoDataService, private router: Router, private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
    this.refreshTodos();
    this.username = this.basicAuthService.getAuthenticatedUser();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos(this.username).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo(this.username, id).subscribe(
      response => {
        this.message = `Todo ${id} Deleted Successfully`;
        this.refreshTodos();
      }
    );
  }


  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }


}

import { Component, OnInit } from '@angular/core';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[];
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  username: string;
  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private navigator: Router
    , private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
    this.username = this.basicAuthService.getAuthenticatedUser();
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    // tslint:disable-next-line: triple-equals
    if (this.id != -1) {
    this.todoDataService.retrieveTodo(this.username, this.id).subscribe(
      data =>
        this.todo = data
    );
  }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoDataService.addTodo(this.username, this.todo).subscribe(
        data => this.navigator.navigate(['todos'])
      );
    } else {
    this.todoDataService.updateTodo(this.username, this.id, this.todo).subscribe(
      data => this.navigator.navigate(['todos'])
    );
  }
  }

}

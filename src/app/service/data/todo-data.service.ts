import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(userName) {
    return this.http.get<Todo[]>(`${API_URL}/users/${userName}/todos`);
  }

  deleteTodo(userName, id) {
    return this.http.delete(`${API_URL}/users/${userName}/todos/${id}`);
  }

  retrieveTodo(userName, id) {
    return this.http.get<Todo>(`${API_URL}/users/${userName}/todos/${id}`);
  }

  updateTodo(userName, id, todo) {
    return this.http.put(`${API_URL}/users/${userName}/todos/${id}`, todo);
  }

  addTodo(userName, todo) {
    return this.http.post(`${API_URL}/users/${userName}/todos`, todo);
  }
}

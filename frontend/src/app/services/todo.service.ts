import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url : string = 'https://localhost:44349/api/todoitems';

  constructor( private http : HttpClient ) { }

  getTasks() {
    return this.http.get<Todo[]>(this.url);
  }

  createTask( task: Todo ) {
    return this.http.post(this.url, task);
  }

  deleteTask( id: number ) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateTask( task: Todo ) {
    if (task.id) {
      return this.http.put(`${this.url}/${task.id}`, task);
    }
    return;
  }
}

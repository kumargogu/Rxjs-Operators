import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get<TodoModel[]>(this.baseUrl);
}
}

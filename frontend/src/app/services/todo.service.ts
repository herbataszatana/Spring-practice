import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Todo } from '../Model/todo.model';
import {TodoStatus } from '../Model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    // Add debugging logs
    console.log('Making request to:', `${this.apiUrl}/getTodos`);
    
    return this.http.get<Todo[]>(`${this.apiUrl}/getTodos`).pipe(
      tap(response => console.log('Response received:', response)),
      catchError(error => {
        console.error('Detailed error:', error);
        throw error;
      })
    );
  }

  addTodo(task: string): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/addTodo`, { task }).pipe(
      tap(response => console.log('Add todo response:', response)),
      catchError(error => {
        console.error('Add todo error:', error);
        throw error;
      })
    );
  }
}
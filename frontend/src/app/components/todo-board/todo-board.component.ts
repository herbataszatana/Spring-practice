import { Component, OnInit } from '@angular/core';
//import { Todo, TodoStatus } from '../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Todo, TodoStatus } from '../../Model/todo.model';

import { TodoColumnComponent } from '../todo-column/todo-column.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="todo-board">
      <h2>Todo List</h2>
      
      <!-- Add Todo Form -->
      <div class="add-todo">
        <input
          type="text"
          [(ngModel)]="newTodoTask"
          (keyup.enter)="addTodo()"
          placeholder="Add new todo..."
        />
        <button (click)="addTodo()">Add</button>
      </div>

      <!-- Error Message -->
      <div *ngIf="error" class="error">
        {{ error }}
      </div>

      <!-- Loading Message -->
      <div *ngIf="loading">Loading todos...</div>

      <!-- Todo List -->
      <div class="todo-list">
        <div *ngFor="let todo of todos" class="todo-item">
          <span>{{ todo.task }}</span>
          <span class="status">{{ todo.status }}</span>
        </div>
      </div>

      <!-- Debug Info -->
      <div class="debug-info">
        <h3>Debug Info:</h3>
        <p>Number of todos: {{ todos.length }}</p>
        <p>Last error: {{ error || 'None' }}</p>
        <button (click)="loadTodos()">Reload Todos</button>
      </div>
    </div>
  `,
  styles: [`
    .todo-board {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .add-todo {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .add-todo input {
      flex: 1;
      padding: 8px;
    }
    .error {
      color: red;
      margin: 10px 0;
    }
    .todo-item {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    .debug-info {
      margin-top: 20px;
      padding: 10px;
      background: #f5f5f5;
    }
  `]
})
export class TodoBoardComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTask: string = '';
  error: string | null = null;
  loading: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    console.log('Loading todos...');
    this.loading = true;
    this.error = null;

    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        console.log('Loaded todos:', todos);
        this.todos = todos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error in component:', error);
        this.error = 'Failed to load todos: ' + (error.message || 'Unknown error');
        this.loading = false;
      }
    });
  }

  addTodo() {
    if (!this.newTodoTask.trim()) {
      this.error = 'Task cannot be empty';
      return;
    }

    console.log('Adding todo:', this.newTodoTask);
    this.todoService.addTodo(this.newTodoTask).subscribe({
      next: (todo) => {
        console.log('Todo added:', todo);
        this.todos.push(todo);
        this.newTodoTask = '';
        this.error = null;
      },
      error: (error) => {
        console.error('Error in component:', error);
        this.error = 'Failed to add todo: ' + (error.message || 'Unknown error');
      }
    });
  }
}
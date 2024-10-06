import { Component, Input } from '@angular/core';
import { Todo } from '../../Model/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-column',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `
    <div class="todo-column">
      <h2>{{ title }}</h2>
      <div class="todo-list">
        @for (todo of todos; track todo.id) {
          <app-todo-item
            [todo]="todo"
            (statusChanged)="onTodoStatusChanged($event)"
          />
        }
      </div>
    </div>
  `,
  styles: [`
    .todo-column {
      background: #f5f5f5;
      border-radius: 4px;
      padding: 16px;
      min-width: 300px;
      margin: 8px;
    }
    .todo-list {
      min-height: 100px;
    }
    h2 {
      margin-bottom: 16px;
      color: #333;
    }
  `]
})
export class TodoColumnComponent {
  @Input() title: string = 'Tasks';
  @Input() todos: Todo[] = [];

  onTodoStatusChanged(todo: Todo) {
    // Handle status change if needed
    console.log('Todo status changed:', todo);
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodoStatus } from '../../Model/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-item" [class.done]="todo.status === TodoStatus.DONE">
      <input
        type="checkbox"
        [checked]="todo.status === TodoStatus.DONE"
        (change)="toggleStatus()"
      />
      <span>{{ todo.task }}</span>
      <span class="date">{{ todo.createdDate | date:'short' }}</span>
    </div>
  `,
  styles: [`
    .todo-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    .todo-item.done span {
      text-decoration: line-through;
      color: #888;
    }
    .todo-item input {
      margin-right: 8px;
    }
    .date {
      margin-left: auto;
      font-size: 0.8em;
      color: #666;
    }
  `]
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() statusChanged = new EventEmitter<Todo>();
  
  TodoStatus = TodoStatus; // Make enum available in template

  toggleStatus() {
    const newStatus = this.todo.status === TodoStatus.DONE 
      ? TodoStatus.TODO 
      : TodoStatus.DONE;
    
    const updatedTodo = {
      ...this.todo,
      status: newStatus
    };
    
    this.statusChanged.emit(updatedTodo);
  }
}
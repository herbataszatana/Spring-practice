import { Component } from '@angular/core';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoBoardComponent],
  template: '<app-todo-board />'
})
export class AppComponent {}
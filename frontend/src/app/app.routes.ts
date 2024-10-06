import { Routes } from '@angular/router';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoBoardComponent
  },
  // Add any additional routes here
  {
    path: '**',  // Wildcard route for 404 page
    redirectTo: ''
  }
];
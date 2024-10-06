export interface Todo {
    id: number;
    task: string;
    createdDate: string;
    status: TodoStatus;
  }
  
  export enum TodoStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
  }
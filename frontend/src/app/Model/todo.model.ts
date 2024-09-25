export interface Todo {
    id: number;
    task: string;
    createdDate: Date;
    status: 'NotStarted' | 'InProgress' | 'Done'; // Using union type for statuses
}
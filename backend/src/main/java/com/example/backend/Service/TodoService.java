package com.example.backend.Service;
import com.example.backend.Model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private List<Todo> todos = new ArrayList<>();

    public TodoService(){
        // Adding some dummy data
        todos.add(new Todo("Walk the dog", new Date(), false, 1L));
        todos.add(new Todo("Go grocery shopping", new Date(), false, 2L));
        todos.add(new Todo("Complete the project", new Date(), true, 3L));
    }
    private Long nextId = 1L;

    public List<Todo> getAllTodos() {
        //Dummy data
        for(Todo todo: todos){
            System.out.println(todo);
        }
        return todos;
    }

    public Todo addTodo(String task) {
        Date currentDate = new Date();

        Todo newTodo = new Todo(task, currentDate,false,  nextId++);
        todos.add(newTodo);
        return newTodo;
    }
}

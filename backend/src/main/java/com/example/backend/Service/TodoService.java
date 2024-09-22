package com.example.backend.Service;
import com.example.backend.Model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private List<Todo> todos = new ArrayList<>();

    private Long nextId = 1L;
    
    public List<Todo> getAllTodos() {
        return todos;
    }

    public Todo addTodo(String task) {
        Date currentDate = new Date();

        Todo newTodo = new Todo(task, currentDate,false,  nextId++);
        todos.add(newTodo);
        return newTodo;
    }
}

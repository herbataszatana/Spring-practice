package com.example.backend.TodoController;

import com.example.backend.Model.Todo;
import com.example.backend.Service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")  // Base path for your API endpoints
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    // GET endpoint to retrieve all to-do items, accessible at /api/getTodos
    @GetMapping("/getTodos")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    // POST endpoint to add a new to-do item, accessible at /api/addTodo
    @PostMapping("/addTodo")
    public Todo addTodo(@RequestBody String title) {
        return todoService.addTodo(title);
    }
}

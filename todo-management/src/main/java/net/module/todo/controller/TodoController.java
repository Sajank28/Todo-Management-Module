package net.module.todo.controller;

import lombok.AllArgsConstructor;
import net.module.todo.dto.TodoDTO;
import net.module.todo.services.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
@CrossOrigin("*")
public class TodoController {

    private TodoService todoService;

    @PostMapping
    public ResponseEntity<TodoDTO> addNewTodo(@RequestBody TodoDTO todoDTO){
        TodoDTO savedTodo = todoService.addTodo(todoDTO);
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<TodoDTO> getTodo(@PathVariable("id") Long todoId){
       TodoDTO todoDTO =  todoService.getTodo(todoId);
       return ResponseEntity.ok(todoDTO);
    }

    @GetMapping
    public ResponseEntity<List<TodoDTO>> getAllTodos(){
        List<TodoDTO> todoDTO = todoService.getAllTodos();
        return ResponseEntity.ok(todoDTO);
    }

    @PutMapping("{id}")
    public ResponseEntity<TodoDTO> editTodo(@RequestBody TodoDTO todoDTO, @PathVariable("id") Long todoId){
        TodoDTO updatedTodo = todoService.editTodo(todoDTO, todoId);
        return ResponseEntity.ok(updatedTodo);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId){
        todoService.deleteTodo(todoId);
        return ResponseEntity.ok("Resource deleted Successfully!");
    }

    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDTO> completeTodo(@PathVariable("id") Long todoId){
        TodoDTO updatedTodoDTO = todoService.completeTodo(todoId);
        return ResponseEntity.ok(updatedTodoDTO);
    }

    @PatchMapping("{id}/in-complete")
    public ResponseEntity<TodoDTO> inCompleteTodo(@PathVariable("id") Long todoId){
        TodoDTO updatedTodoDTO = todoService.inCompleteTodo(todoId);
        return ResponseEntity.ok(updatedTodoDTO);
    }
}

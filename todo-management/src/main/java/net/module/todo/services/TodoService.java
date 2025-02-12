package net.module.todo.services;

import net.module.todo.dto.TodoDTO;

import java.util.List;

public interface TodoService {

    TodoDTO addTodo(TodoDTO todoDto);
    TodoDTO getTodo(Long id);
    List<TodoDTO> getAllTodos();
    TodoDTO editTodo(TodoDTO todoDTO,Long id);
    void deleteTodo(Long id);

    TodoDTO completeTodo(Long id);
    TodoDTO inCompleteTodo(Long id);
}

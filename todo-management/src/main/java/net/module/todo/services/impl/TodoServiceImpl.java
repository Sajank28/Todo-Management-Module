package net.module.todo.services.impl;

import lombok.AllArgsConstructor;
import net.module.todo.dto.TodoDTO;
import net.module.todo.entity.Todo;
import net.module.todo.exception.ResourceNotFoundException;
import net.module.todo.repository.TodoRepository;
import net.module.todo.services.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;
    private ModelMapper modelMapper;

    @Override
    public TodoDTO addTodo(TodoDTO todoDTO) {
        //convert todoDto to todo
        Todo todo = modelMapper.map(todoDTO,Todo.class);

        //save in repo
        Todo savedTodo = todoRepository.save(todo);

        //convert savedTodo to tododto
        return modelMapper.map(savedTodo, TodoDTO.class);
    }

    @Override
    public TodoDTO getTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Resource Not found with id: "+id));
        return modelMapper.map(todo, TodoDTO.class);
    }

    @Override
    public List<TodoDTO> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();
        return todos.stream().map((todo)->modelMapper.map(todo, TodoDTO.class)).collect(Collectors.toList());
    }

    @Override
    public TodoDTO editTodo(TodoDTO todoDTO, Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Resource Not found with id :"+id));
        todo.setTitle(todoDTO.getTitle());
        todo.setDescription(todoDTO.getDescription());
        todo.setCompleted(todoDTO.isCompleted());
        Todo updatedTodo = todoRepository.save(todo);
        return modelMapper.map(updatedTodo, TodoDTO.class);
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Resource not found with id:"+id));
        todoRepository.deleteById(id);

    }

    @Override
    public TodoDTO completeTodo(Long id) {
        Todo todo= todoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Resource Not found with id:"+id));
        todo.setCompleted(Boolean.TRUE);
        Todo updatedTodo = todoRepository.save(todo);
        return modelMapper.map(updatedTodo,TodoDTO.class);
    }

    @Override
    public TodoDTO inCompleteTodo(Long id) {
        Todo todo= todoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Resource Not found with id:"+id));
        todo.setCompleted(Boolean.FALSE);
        Todo updatedTodo = todoRepository.save(todo);
        return modelMapper.map(updatedTodo,TodoDTO.class);
    }


}

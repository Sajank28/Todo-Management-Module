package net.module.todo.services;

import net.module.todo.dto.LoginDto;
import net.module.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);

}

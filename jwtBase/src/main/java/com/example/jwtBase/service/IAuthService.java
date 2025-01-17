package com.example.jwtBase.service;

import com.example.jwtBase.dto.LoginDto;

public interface IAuthService {
    String login(LoginDto loginDto);
}

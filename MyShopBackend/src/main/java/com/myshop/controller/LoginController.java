package com.myshop.controller;

import com.myshop.model.dto.SessionDto;
import com.myshop.model.dto.UserDto;
import com.myshop.session.SessionRegistry;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class LoginController {

public AuthenticationManager manager;
public SessionRegistry sessionRegistry;


    @PostMapping("login")
    public ResponseEntity<SessionDto> login(@RequestBody UserDto userDto){
        manager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(),userDto.getPassword()));
        String sessionKey = sessionRegistry.registerSession(userDto.getEmail());
        SessionDto response = new SessionDto();
        response.setSessionKey(sessionKey);
        return  ResponseEntity.ok(response);
    }
}


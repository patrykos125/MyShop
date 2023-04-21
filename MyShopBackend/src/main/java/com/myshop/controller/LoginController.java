package com.myshop.controller;

import com.myshop.model.dto.SessionDto;
import com.myshop.model.dto.UserDto;
import com.myshop.session.SessionRegistry;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class LoginController {

public AuthenticationManager manager;
public SessionRegistry sessionRegistry;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("login")
    public ResponseEntity<SessionDto> login(@RequestBody UserDto userDto){
        Authentication authenticate = manager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword()));
        System.out.println(userDto);//TODO wywalić tą linijkę
        if (authenticate.isAuthenticated()) {
            String sessionKey = sessionRegistry.registerSession(userDto.getEmail());
            SessionDto response = new SessionDto();
            response.setSessionKey(sessionKey);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        return new ResponseEntity<>(new SessionDto(),HttpStatus.UNAUTHORIZED);
    }
}


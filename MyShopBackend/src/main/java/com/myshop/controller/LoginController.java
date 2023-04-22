package com.myshop.controller;

import com.myshop.model.dto.SessionDto;
import com.myshop.model.dto.UserLoginDto;
import com.myshop.session.SessionRegistry;
import lombok.AllArgsConstructor;
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
    public ResponseEntity<SessionDto> login(@RequestBody UserLoginDto userLoginDto){
        Authentication authenticate = manager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.getEmail(), userLoginDto.getPassword()));
        System.out.println(userLoginDto);//TODO wywalić tą linijkę
        if (authenticate.isAuthenticated()) {
            String sessionKey = sessionRegistry.registerSession(userLoginDto.getEmail());
            SessionDto response = new SessionDto();
            response.setSessionKey(sessionKey);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}


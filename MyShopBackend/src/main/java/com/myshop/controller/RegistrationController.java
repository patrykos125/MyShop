package com.myshop.controller;

import com.myshop.model.Session;
import com.myshop.model.User;
import com.myshop.repository.UserRepository;
import com.myshop.session.SessionRegistry;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@AllArgsConstructor
public class RegistrationController {
    UserRepository userRepository;
    PasswordEncoder passwordEncoder;
    SessionRegistry sessionRegistry;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/registration")
    public ResponseEntity<String> create(@RequestBody User newUser){
        User saved;
         if (newUser == null) { throw new IllegalArgumentException("New user must be not null");

        } else if (userRepository.findUserByEmail(newUser.getEmail()) == null) {
             newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
             String sessionKey = sessionRegistry.generateSessionKey();
             newUser.setSession(new Session(sessionKey));
             saved = userRepository.save(newUser);
             System.out.println(saved + " was added to database");

             return new ResponseEntity<>(saved.getSession().getSessionKey(), HttpStatus.CREATED);
         }
         return  new ResponseEntity<>("",HttpStatus.CONFLICT);







    }
}

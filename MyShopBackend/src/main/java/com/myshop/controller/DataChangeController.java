package com.myshop.controller;

import com.myshop.model.User;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class DataChangeController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PutMapping("/user/changePassword")
    public ResponseEntity<Boolean> changePassword(@RequestHeader("Authorization") String token, @RequestBody Map<String, String> passwords){
        String oldPassword = passwords.get("oldPassword");
        String newPassword = passwords.get("newPassword");
        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            if(passwordEncoder.matches(oldPassword, user.getPassword())){
                user.setPassword(passwordEncoder.encode(newPassword));
                userRepository.save(user);
                return ResponseEntity.ok(true);
            } else {
                return ResponseEntity.ok(false);
            }
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
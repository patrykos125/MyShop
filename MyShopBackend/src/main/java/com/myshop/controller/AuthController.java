package com.myshop.controller;

import com.myshop.model.enums.UserRole;
import com.myshop.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    SessionRepository sessionRepository;

    @GetMapping("/api/auth")
    public ResponseEntity<Boolean> checkTokenValidity(@RequestHeader("Authorization") String token) {
        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @GetMapping("/api/authAdmin")
    public ResponseEntity<Boolean> checkUserRole(@RequestHeader("Authorization") String token) {
        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            if(sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Admin || sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Moderator) {
                return ResponseEntity.ok(true);
            }
            return ResponseEntity.ok(false);
        } else {
            return ResponseEntity.ok(false);
        }
    }


}
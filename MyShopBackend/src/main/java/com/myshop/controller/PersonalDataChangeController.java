package com.myshop.controller;

import com.myshop.model.User;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalDataChangeController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;

    @PutMapping("/user/changePersonalData")
    public ResponseEntity<Boolean> changeData(@RequestHeader("Authorization") String token, @RequestBody User newData) {

        if (sessionRepository.findSessionBySessionKey(token).isPresent()) {
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            if (user != null) {
                for (Field userField : user.getClass().getDeclaredFields()) {
                    userField.setAccessible(true);
                    try {
                        Object userValue = userField.get(user);
                        Field newDataField = newData.getClass().getDeclaredField(userField.getName());
                        newDataField.setAccessible(true);
                        Object newValue = newDataField.get(newData);

                        if (userValue != null && newValue != null && newValue != "") {
                            userField.set(user, newValue);
                        }
                    } catch (NoSuchFieldException | IllegalAccessException e) {
                        e.printStackTrace();
                    }
                }
                userRepository.save(user);
                return ResponseEntity.ok(true);
            }


        }
        return ResponseEntity.ok(false);
    }
}


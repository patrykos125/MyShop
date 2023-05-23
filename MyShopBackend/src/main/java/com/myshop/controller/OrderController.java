package com.myshop.controller;

import com.myshop.model.BuyedItems;
import com.myshop.model.Item;
import com.myshop.model.Order;
import com.myshop.model.User;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/user/saveOrder")
    public ResponseEntity<Boolean> saveOrder(@RequestHeader("Authorization") String token, @RequestBody List<String> buyedItems){

        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());


            //TODO help

            return ResponseEntity.ok(true);


        } else {
            return ResponseEntity.ok(false);
        }
    }
}

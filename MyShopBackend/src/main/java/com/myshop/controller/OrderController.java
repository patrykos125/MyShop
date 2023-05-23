package com.myshop.controller;

import com.myshop.model.BuyedItems;
import com.myshop.model.Order;
import com.myshop.model.User;
import com.myshop.repository.BuyedItemsRepository;
import com.myshop.repository.OrderRepository;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    BuyedItemsRepository buyedItemsRepository;

    @PostMapping("/user/saveOrder")
    public ResponseEntity<Boolean> saveOrder(@RequestHeader("Authorization") String token, @RequestBody List<BuyedItems> buyedItems) {
        if (sessionRepository.findSessionBySessionKey(token).isPresent()) {
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            if (user != null) {
                Order order = new Order();
                order.setDate(LocalDate.now());
                order.setUser(user);
                order.setStatus("Realizowane");
                orderRepository.save(order);

                for(BuyedItems item : buyedItems){
                    BuyedItems newItem;
                    newItem = item;
                    newItem.setOrder(order);
                    buyedItemsRepository.save(newItem);
                }

                orderRepository.save(order);
                return ResponseEntity.ok(true);
            } else {
                return ResponseEntity.ok(false);
            }

        } else {
            return ResponseEntity.ok(false);
        }
    }

    }

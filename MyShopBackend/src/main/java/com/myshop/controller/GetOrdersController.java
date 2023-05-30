package com.myshop.controller;

import com.myshop.model.Order;
import com.myshop.model.User;
import com.myshop.model.dto.OrderDto;
import com.myshop.model.enums.UserRole;
import com.myshop.repository.OrderRepository;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GetOrdersController {
    @Autowired
    SessionRepository sessionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/order/getOrders")
    public List<OrderDto> Orders(@RequestHeader("Authorization") String token) {
        if (sessionRepository.findSessionBySessionKey(token).isPresent()) {
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            if(user!=null){
                List<Order> orders = orderRepository.findByUser(user);
                List<OrderDto> orderDTOs = new ArrayList<>();
                for (Order order : orders) {
                    OrderDto orderDTO = new OrderDto();
                    orderDTO.setId(order.getId());
                    orderDTO.setDate(order.getDate());
                    orderDTO.setItems(order.getItems());
                    orderDTO.setStatus(order.getStatus());
                    orderDTOs.add(orderDTO);
                }
                return orderDTOs;
            } else {
                return null;
            }
        }
        return null;
    }

    @GetMapping("/order/getAllOrders")
    public List<OrderDto> AllOrders(@RequestHeader("Authorization") String token) {
        if (sessionRepository.findSessionBySessionKey(token).isPresent() && ( sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Admin
                ||  sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Moderator)) {
                List<Order> orders = orderRepository.findAll();
                List<OrderDto> orderDTOs = new ArrayList<>();
                for (Order order : orders) {
                    OrderDto orderDTO = new OrderDto();
                    orderDTO.setId(order.getId());
                    orderDTO.setDate(order.getDate());
                    orderDTO.setItems(order.getItems());
                    orderDTO.setStatus(order.getStatus());
                    orderDTOs.add(orderDTO);
                }
                return orderDTOs;
            } else {
                return null;
            }
    }

}

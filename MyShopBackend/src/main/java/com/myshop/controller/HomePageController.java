package com.myshop.controller;

import com.myshop.model.Item;
import com.myshop.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class HomePageController {
    @Autowired
    ItemRepository itemRepository;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    ResponseEntity<List<Item>> homePage(){
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);

    }
}

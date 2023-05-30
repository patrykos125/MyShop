package com.myshop.controller;

import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import com.myshop.model.enums.UserRole;
import com.myshop.repository.ItemRepository;
import com.myshop.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;
    @Autowired
    SessionRepository sessionRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("item/{id}")
    ResponseEntity<Item> item(@PathVariable("id") Long id ){
        return new ResponseEntity<>( itemRepository.findItemByItemId(id), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("admin-panel/add-item")
    ResponseEntity<HttpStatus> addItem(@RequestHeader("Authorization") String token,@RequestBody Item item ){
        if (sessionRepository.findSessionBySessionKey(token).isPresent() && ( sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Admin
                ||  sessionRepository.findSessionBySessionKey(token).get().getUser().getUserRole() == UserRole.Moderator)) {
            System.out.println(item);
            itemRepository.save(item);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(  HttpStatus.UNAUTHORIZED);
    }
}

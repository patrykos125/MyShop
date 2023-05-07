package com.myshop.controller;

import com.myshop.model.CommentItem;
import com.myshop.model.Item;
import com.myshop.repository.CommentRepository;
import com.myshop.repository.ItemRepository;
import com.myshop.repository.SessionRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

    @Autowired
    ItemRepository itemRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    SessionRepository sessionRepository;

    @GetMapping("/api/comment/checkAuthor")
    ResponseEntity<Boolean>  checkComment(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/api/comment/{id}")
    ResponseEntity<Boolean> addComment(@PathVariable("id") Long id, @RequestBody CommentItem comment, @RequestHeader("Authorization") String token){
        Item item = itemRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Item not found"));

        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            comment.setItem(item);
            comment.setUserID(sessionRepository.findSessionBySessionKey(token).get().getUser().getUserId());
            comment.setUserName(sessionRepository.findSessionBySessionKey(token).get().getUser().getFirstName());
            comment.setCreationDate(LocalDate.now());
            commentRepository.save(comment);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }



}
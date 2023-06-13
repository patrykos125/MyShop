package com.myshop.controller;

import com.myshop.model.Address;
import com.myshop.model.CommentItem;
import com.myshop.model.Item;
import com.myshop.model.User;
import com.myshop.repository.AddressRepository;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AddressController {
    AddressRepository addressRepository;
    SessionRepository sessionRepository;
    UserRepository userRepository;

    public AddressController(AddressRepository addressRepository, SessionRepository sessionRepository, UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.sessionRepository = sessionRepository;
        this.userRepository = userRepository;
    }





    @PutMapping("/api/address")
    ResponseEntity<HttpStatus> addAddress(@RequestHeader("Authorization") String token, @RequestBody Address address){

        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            address.setUser(user);
           addressRepository.save(address);
        return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/api/address")
    ResponseEntity<List<Address>> getAddress(@RequestHeader("Authorization") String token ){

        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            User user = userRepository.findUserByEmail(sessionRepository.findSessionBySessionKey(token).get().getUser().getEmail());
            List<Address> addresses = user.getAddresses();
           return new ResponseEntity<>(addresses,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }


}

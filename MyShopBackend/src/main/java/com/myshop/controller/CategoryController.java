package com.myshop.controller;

import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import com.myshop.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {


    ItemRepository itemRepository;
    @Autowired
    public CategoryController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
//    @GetMapping("/{category}")
//    ResponseEntity<List<Item>> category(@PathVariable("category")Category category ){
//        return new ResponseEntity<>( itemRepository.findAllByCategory(category), HttpStatus.OK);
//    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/shoes")
    public ResponseEntity<List<Item>> getShoes() {
        List<Item> items = itemRepository.findAllByCategory(Category.SHOES);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/t_shirt")
    public ResponseEntity<List<Item>> getTShirts() {
        List<Item> items = itemRepository.findAllByCategory(Category.T_SHIRT);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/trousers")
    public ResponseEntity<List<Item>> getTrousers() {
        List<Item> items = itemRepository.findAllByCategory(Category.TROUSERS);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/cap")
    public ResponseEntity<List<Item>> getCaps() {
        List<Item> items = itemRepository.findAllByCategory(Category.CAP);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/dress")
    public ResponseEntity<List<Item>> getDresses() {
        List<Item> items = itemRepository.findAllByCategory(Category.DRESS);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/shorts")
    public ResponseEntity<List<Item>> getShorts() {
        List<Item> items = itemRepository.findAllByCategory(Category.SHORTS);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/socks")
    public ResponseEntity<List<Item>> getSocks() {
        List<Item> items = itemRepository.findAllByCategory(Category.SOCKS);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/hoodie")
    public ResponseEntity<List<Item>> getHoodies() {
        List<Item> items = itemRepository.findAllByCategory(Category.HOODIE);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/jacket")
    public ResponseEntity<List<Item>> getJackets() {
        List<Item> items = itemRepository.findAllByCategory(Category.JACKET);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/shirt")
    public ResponseEntity<List<Item>> getShirts() {
        List<Item> items = itemRepository.findAllByCategory(Category.SHIRT);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/skirt")
    public ResponseEntity<List<Item>> getSkirts() {
        List<Item> items = itemRepository.findAllByCategory(Category.SKIRT);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }


}

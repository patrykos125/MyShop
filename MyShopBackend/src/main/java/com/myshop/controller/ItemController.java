package com.myshop.controller;

import com.myshop.repository.ItemRepository;
import com.myshop.model.enums.Category;
import com.myshop.model.Item;
import com.myshop.model.enums.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;
@Bean
    public void prepareRepository(){
        itemRepository.save(new Item(0,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, magni.","długi opis", Size.M, Category.TROUSERS,12.99,"https://i.erli.pl/10pmzc.320e1e.xl.jpg"));
        itemRepository.save(new Item(0,"jakis opisLorem ipsum dolor sit amet,","długi opis", Size.M, Category.TROUSERS,12.99,"https://sklep.keeza.pl/userdata/public/gfx/803/Koszulka-bawelniana-KEEZA.jpg"));
        itemRepository.save(new Item(0,"jakis opisdolor sit amet, ","długi opis", Size.M, Category.TROUSERS,12.99,"https://www.alpinus.eu/img/2508111/kurtka-zimowa-meska-alpinus-nordend.jpg"));
        itemRepository.save(new Item(0,"Lorem ipsum dolor sit amet, consectetur adipisicingjakis opis","długi opis", Size.M, Category.TROUSERS,12.99,"https://strefa-logo.pl/userdata/public/gfx/5936/Lekka-kurtka-puchowa-meska-Elevate-Scotia-czarna.jpg"));
        itemRepository.save(new Item(0,"jakis opis","długi opis", Size.M, Category.TROUSERS,12.99,"https://risardi.pl/22751-large_default/koszula-meska-dlugi-rekaw-rl27-granatowa.jpg"));
    }

}

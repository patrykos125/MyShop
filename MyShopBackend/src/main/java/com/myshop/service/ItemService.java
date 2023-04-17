package com.myshop.service;

import com.myshop.repository.ItemRepository;
import com.myshop.model.enums.Category;
import com.myshop.model.Item;
import com.myshop.model.enums.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
@Bean
    public void prepareRepository(){
//        itemRepository.save(new Item(0,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, magni.","długi opis", Size.M, Category.TROUSERS,12.99,"https://i.erli.pl/10pmzc.320e1e.xl.jpg",20,true));
//        itemRepository.save(new Item(0,"jakis opisLorem ipsum dolor sit amet,","długi opis", Size.M, Category.TROUSERS,15.99,"https://sklep.keeza.pl/userdata/public/gfx/803/Koszulka-bawelniana-KEEZA.jpg",20,false));
//        itemRepository.save(new Item(0,"jakis opisdolor sit amet, ","długi opis", Size.M, Category.TROUSERS,12.99,"https://www.alpinus.eu/img/2508111/kurtka-zimowa-meska-alpinus-nordend.jpg",20,false));
//        itemRepository.save(new Item(0,"Lorem ipsum dolor sit amet, consectetur adipisicingjakis opis","długi opis", Size.M, Category.TROUSERS,12.99,"https://strefa-logo.pl/userdata/public/gfx/5936/Lekka-kurtka-puchowa-meska-Elevate-Scotia-czarna.jpg",20,true));
//        itemRepository.save(new Item(0,"jakis opis","długi opis", Size.M, Category.TROUSERS,17.99,"https://risardi.pl/22751-large_default/koszula-meska-dlugi-rekaw-rl27-granatowa.jpg",20,true));
//        itemRepository.save(new Item(0,"jakis opis","długi opis", Size.M, Category.SHOES,17.99,"https://risardi.pl/22751-large_default/koszula-meska-dlugi-rekaw-rl27-granatowa.jpg",20,true));
   }

}

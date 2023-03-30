package com.myshop.repository;

import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item,Long> {

    List<Item> findAllByCategory(Category category);
    Item findItemById(Long id);


}

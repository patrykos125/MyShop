package com.myshop.repository;

import com.myshop.model.BuyedItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyedItemsRepository extends JpaRepository<BuyedItems,Long> {

}
package com.myshop.repository;

import com.myshop.model.Address;
import com.myshop.model.BuyedItems;
import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Long> {

}

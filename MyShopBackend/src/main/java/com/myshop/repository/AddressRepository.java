package com.myshop.repository;

import com.myshop.model.Address;
import com.myshop.model.BuyedItems;
import com.myshop.model.Item;
import com.myshop.model.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AddressRepository extends JpaRepository<Address,Long> {

}

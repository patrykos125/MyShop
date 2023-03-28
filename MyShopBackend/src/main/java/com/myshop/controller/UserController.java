package com.myshop.controller;

import com.myshop.model.Item;
import com.myshop.model.Order;
import com.myshop.model.User;
import com.myshop.model.enums.Category;
import com.myshop.model.enums.Size;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@RestController
public class UserController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user")
    public User userPage(){
        User userf = new User();
        userf.setFirstName("Jan");
        userf.setSurname("Kowalski");
        userf.setCity("Lublin");
        userf.setAddress("Konstantynów");
        userf.setApartmentNumber("12/1");
        userf.setPhoneNumber("555666777");
        userf.setEmail("jan.kowalski@gmail.com");
        userf.setCompany(true);
        userf.setNip("1234567890");
        userf.setZipCode("20-101");
        userf.setArchiveOrders(FillListArchive().toArray(new Order[0]));
        userf.setActiveOrders(FillListActive().toArray(new Order[0]));
        return userf;
    }

    public List<Order> FillListArchive(){
        List<Order> archive = new ArrayList<>();
        archive.add(new Order(4, LocalDate.now(), new Item[]{new Item(4,"","", Size.M, Category.HOODIE,122.99,""), new Item(5,"","", Size.M, Category.SHOES,222.99,"")}, "Zakończone"));
        return archive;
    }
    public List<Order> FillListActive(){
        List<Order> active = new ArrayList<>();
        active.add(new Order(1, LocalDate.now().minusMonths(1), new Item[]{new Item(2,"","", Size.M, Category.TROUSERS,12.99,""), new Item(0,"","", Size.M, Category.CAP,32.99,"")}, "Gotowe do wysylki"));
        active.add(new Order(2, LocalDate.now().minusDays(1), new Item[]{new Item(3,"","", Size.M, Category.DRESS,72.99,"")}, "Kompletowane"));
        return active;
    }


}

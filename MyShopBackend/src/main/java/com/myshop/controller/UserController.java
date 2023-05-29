package com.myshop.controller;

import com.myshop.model.User;
import com.myshop.repository.SessionRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    SessionRepository sessionRepository;


    @GetMapping("/user")
    public User userPage(HttpServletRequest request){

       String sessionKey = request.getHeader(HttpHeaders.AUTHORIZATION);

       User user = sessionRepository.findSessionBySessionKey(sessionKey).get().getUser();

        User userf = new User();
        userf.setFirstName(user.getFirstName());
        userf.setSurname(user.getSurname());
        userf.setCity(user.getCity());
        userf.setStreet(user.getStreet());
        userf.setApartmentNumber(user.getApartmentNumber());
        userf.setPhoneNumber(user.getPhoneNumber());
        userf.setEmail(user.getEmail());
        userf.setCompany(user.isCompany());
        userf.setNip(user.getNip());
        userf.setZipCode(user.getZipCode());
        userf.setHouseNumber(user.getHouseNumber());
        userf.setCreationDate(user.getCreationDate());
        userf.setUserRole(user.getUserRole());

        return userf;
    }
    @GetMapping("/user/id")
    public Long userID(@RequestHeader("Authorization") String token){
        if(sessionRepository.findSessionBySessionKey(token).isPresent()){
            return sessionRepository.findSessionBySessionKey(token).get().getUser().getUserId();
        }
        return null;
    }


//    public List<Order> FillListArchive(){
//        List<Order> archive = new ArrayList<>();
//        archive.add(new Order(4, LocalDate.now(), new Item[]{new Item(4,"","", Size.M, Category.HOODIE,122.99,"",20,true), new Item(5,"","", Size.M, Category.SHOES,222.99,"",20,true)}, "Zakończone"));
//        return archive;
//    }
//    public List<Order> FillListActive(){
//        List<Order> active = new ArrayList<>();
//        active.add(new Order(1, LocalDate.now().minusMonths(1), new Item[]{new Item(2,"","", Size.M, Category.TROUSERS,12.99,"",20,true), new Item(0,"","", Size.M, Category.CAP,32.99,"",20,true)}, "Gotowe do wysylki"));
//        active.add(new Order(2, LocalDate.now().minusDays(1), new Item[]{new Item(3,"","", Size.M, Category.DRESS,72.99,"",20,true)}, "Kompletowane"));
//        return active;
//    }


}

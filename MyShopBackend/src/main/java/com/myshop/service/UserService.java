package com.myshop.service;

import com.myshop.model.Session;
import com.myshop.model.User;
import com.myshop.repository.UserRepository;
import com.myshop.session.SessionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final SessionRegistry sessionRegistry;


        @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, SessionRegistry sessionRegistry) {
        this.userRepository = userRepository;
            this.passwordEncoder = passwordEncoder;
            this.sessionRegistry = sessionRegistry;
        }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("Failed to find user with email: "+email);
                        }

        return user;
    }
//    @Bean
//    public void createUser(){
//        User user = new User();
//        user.setPassword(passwordEncoder.encode("admin"));
//        user.setEmail("admin@wp.pl");
//        String sessionKey = sessionRegistry.generateSessionKey();
//        System.out.println(sessionKey);
//        user.setSession(new Session(sessionKey));
//
//        user.setFirstName("Jan");
//        user.setSurname("Kowalski");
//        user.setCity("Lublin");
//        user.setStreet("Konstantynów");
//        user.setApartmentNumber("12/1");
//        user.setPhoneNumber("555666777");
//        user.setCompany(true);
//        user.setNip("1234567890");
//        user.setZipCode("20-101");
//        userRepository.save(user);
//
//
//
//    }
}

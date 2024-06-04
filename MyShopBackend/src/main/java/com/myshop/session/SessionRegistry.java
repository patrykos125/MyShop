package com.myshop.session;

import com.myshop.model.Session;
import com.myshop.model.User;
import com.myshop.repository.SessionRepository;
import com.myshop.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.UUID;
@Component
@AllArgsConstructor

public class SessionRegistry {

    PasswordEncoder passwordEncoder;

     SessionRepository sessionRepository;

    UserRepository userRepository;



    public  String registerSession(final String email){
        if (email== null){
            throw  new RuntimeException("Email needs to by provided");
        }
        final  String sessionKey = generateSessionKey();
        Session session = new Session(sessionKey);
        sessionRepository.save(session);
        User user = userRepository.findUserByEmail(email);
        user.setSession(session);
        user.setLastLogin(LocalDate.now());
        userRepository.save(user);
        return sessionKey;

    }
    public String getEmailForSession(final String sessionKey){


        boolean isPresent = sessionRepository.findSessionBySessionKey(sessionKey).isPresent();
        if (isPresent){
          return   sessionRepository.findSessionBySessionKey(sessionKey).get().getUser().getEmail();
        }
        return "Nie znaleziono";





    }




    public String generateSessionKey(){
        return passwordEncoder.encode(UUID.randomUUID().toString());

    }
}

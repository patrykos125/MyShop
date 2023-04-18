package com.myshop.security;

import com.myshop.service.UserService;
import com.myshop.session.SessionFilter;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class ApplicationSecurityConfig      {

    PasswordEncoder passwordEncoder ;
    UserService userService;
    SessionFilter sessionFilter;

    public static String[] publicEndPoints = {"/","/login","/registration","/item/**","/h2-console/**","/h2-console",
            "/shoes", "/t-shirt", "/trousers", "/cap", "/dress", "/shorts", "/socks", "/hoodie", "/jacket", "/shirt", "/skirt"};


    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception{


        http.authorizeHttpRequests((auth)->{
            auth
                    .requestMatchers(publicEndPoints)
                    .permitAll()
                    .anyRequest()
                    .authenticated();




        })
                .exceptionHandling().authenticationEntryPoint(
                        (request, response, ex) -> response.sendError(
                                HttpServletResponse.SC_UNAUTHORIZED,
                                ex.getMessage())
                ).and()
                .csrf()
                .disable()
                .headers()
                .frameOptions().
                disable()
                .and()
                .addFilterBefore(sessionFilter, UsernamePasswordAuthenticationFilter.class);


        return http.build();


    }


    @Bean
    public AuthenticationManager authenticationManager (AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }








}

package com.myshop.session;

import com.myshop.model.User;
import com.myshop.service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@AllArgsConstructor
public class SessionFilter extends OncePerRequestFilter {

    SessionRegistry sessionRegistry;
    UserService userService;




    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        if(request.getRequestURI().endsWith("/user")){
            String sessionKey = request.getHeader(HttpHeaders.AUTHORIZATION);

            if(sessionKey == null ||sessionKey.length()==0){


                filterChain.doFilter(request,response);
            }
            String email = sessionRegistry.getEmailForSession(sessionKey);

            if(email == null){

                filterChain.doFilter(request,response);

            }
            final User user = (User) userService.loadUserByUsername(email);

            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    user, null, user.getAuthorities()
            );

            token.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(token);
            filterChain.doFilter(request, response);
        }else
        filterChain.doFilter(request,response);












    }
}

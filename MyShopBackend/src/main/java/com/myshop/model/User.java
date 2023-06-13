package com.myshop.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.myshop.model.enums.UserRole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "users")
public class User implements  UserDetails ,Serializable {
@Override
    public String getUsername() {
        return email;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String password;
    private String firstName;
    private String surname;
    private String zipCode;
    private String city;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String phoneNumber;
    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private  List<Address> addresses = new ArrayList<>();
    private String email;
    private boolean company;
    private String nip;
    private LocalDate creationDate;
    private LocalDate lastLogin;
    private UserRole userRole;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "sessionId",referencedColumnName = "sessionId")
    private Session session;
    @OneToMany(mappedBy = "user")
    private List<Order> orders = new ArrayList<>();



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + userId +
                ", email='" + email + '\'' +
                // Exclude referencing the session field in the toString() method
                // ", session=" + session +
                '}';
    }


}
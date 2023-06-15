package com.myshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String surname;
    private String zipCode;
    private String city;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String phoneNumber;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "client_id")
    private User user;
}

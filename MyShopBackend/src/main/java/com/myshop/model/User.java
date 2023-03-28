package com.myshop.model;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String surname;
    private String city;
    private String address;
    private String apartmentNumber;
    private String phoneNumber;
    private String email;
    private boolean company;
    private String zipCode;
    private String nip;

    private Order[] archiveOrders;
    private Order[] activeOrders;

}
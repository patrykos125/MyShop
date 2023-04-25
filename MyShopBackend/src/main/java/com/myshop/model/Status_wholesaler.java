package com.myshop.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Status_wholesaler {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String wholesaler;

    @OneToMany(mappedBy = "wholesaler")
    private List<Item> items = new ArrayList<>();

    private LocalDate deliverTime;


}

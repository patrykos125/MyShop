package com.myshop.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "clinet_id")
    private Client client;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<Item> items = new ArrayList<>();


    @OneToOne
    private Status status;

    @OneToOne
    private Shipment shipment;

}

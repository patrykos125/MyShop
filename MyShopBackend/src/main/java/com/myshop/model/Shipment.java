package com.myshop.model;

import com.myshop.model.enums.ShipmentStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Shipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long Nr_Order;

    private String deliver;

    private LocalDate date;
    private String name;
    private int cost;
    private ShipmentStatus status;

}
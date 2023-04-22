package com.myshop.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private long orderId;
    private long userId;

    private LocalDate date;
    private Item[] items;
    private String status;
}

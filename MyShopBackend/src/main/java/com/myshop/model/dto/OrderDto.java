package com.myshop.model.dto;

import com.myshop.model.BuyedItems;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private Long id;
    private LocalDate date;
    private List<BuyedItems> items;
    private String status;
}

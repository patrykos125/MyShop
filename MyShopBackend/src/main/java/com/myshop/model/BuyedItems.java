package com.myshop.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.myshop.model.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BuyedItems {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;
    private String  shortDescription;
    private String longDescription;
    private String size;
    @Enumerated(EnumType.STRING)
    private Category category;
    private double price;
    private String imgUrl;
    private double oldPrice;
    private boolean sale;

}

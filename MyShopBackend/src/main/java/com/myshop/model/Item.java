package com.myshop.model;

import com.myshop.model.enums.Category;
import com.myshop.model.enums.Size;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Item implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private long id;
   private String  shortDescription;
   private String longDescription;
   private Size size;
   private Category category;
   private double price;
   private String imgUrl;
   private double oldPrice;
   private boolean sale;
}


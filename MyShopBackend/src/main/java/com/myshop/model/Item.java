package com.myshop.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.myshop.model.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Item implements Serializable {
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
   @JsonManagedReference
   @OneToMany(mappedBy = "item")
   private List<CommentItem> comments = new ArrayList<>();

   public Item(long itemId, String shortDescription, String longDescription, String size, Category category, double price, String imgUrl, double oldPrice, boolean sale) {
      this.itemId = itemId;
      this.shortDescription = shortDescription;
      this.longDescription = longDescription;
      this.size = size;
      this.category = category;
      this.price = price;
      this.imgUrl = imgUrl;
      this.oldPrice = oldPrice;
      this.sale = sale;
   }


}


package com.myshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
@Data
@Entity(name = "comments")
@NoArgsConstructor
@AllArgsConstructor
public class CommentItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String commentText;

    private int rating;

    private Long userID;
    private String userName;

    private LocalDate creationDate;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @Override
    public String toString() {
        return "CommentItem [id=" + id + ", rating=" + rating + ", comment=" + commentText + "]";
    }
}
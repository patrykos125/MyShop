package com.myshop.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int nip;

    public Long id() {
        return id;
    }

    public void id(Long company_id) {
        this.id = company_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNip() {
        return nip;
    }

    public void setNip(int nip) {
        this.nip = nip;
    }
}

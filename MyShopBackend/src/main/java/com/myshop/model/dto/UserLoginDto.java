package com.myshop.model.dto;

import lombok.Data;

@Data
public class UserLoginDto {
    private  String email;
    private  String password;
    private boolean rememberMe;
}

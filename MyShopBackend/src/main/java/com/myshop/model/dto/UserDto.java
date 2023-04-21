package com.myshop.model.dto;

import lombok.Data;

@Data
public class UserDto {
    private  String email;
    private  String password;
    private boolean rememberMe;
}

package com.myshop.service;

import java.util.UUID;

public class OrderService {

    String prepareUUID(){
        String uuid;
        uuid = UUID.randomUUID().toString();
return uuid;
    }




}

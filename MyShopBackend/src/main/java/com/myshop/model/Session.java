package com.myshop.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "userSession")
@Data
public class Session {
    public Session(String sessionKey) {
        this.sessionKey = sessionKey;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long sessionId;
  private  String sessionKey;
    @OneToOne(mappedBy = "session")
    User user;

    public Session() {

    }
}

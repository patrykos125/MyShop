package com.myshop.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "userSession")
@Data
@NoArgsConstructor
@AllArgsConstructor
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


}

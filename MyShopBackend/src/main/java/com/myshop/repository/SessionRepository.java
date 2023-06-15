package com.myshop.repository;

import com.myshop.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session,Long> {

   Optional<Session> findSessionBySessionKey(String key);
}

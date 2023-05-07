package com.myshop.repository;
import com.myshop.model.CommentItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<CommentItem, Long> {

}
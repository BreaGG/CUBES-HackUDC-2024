package com.HackUDC.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HackUDC.model.postModel;

@Repository
public interface postRepository extends JpaRepository<postModel, Long> {

    
}

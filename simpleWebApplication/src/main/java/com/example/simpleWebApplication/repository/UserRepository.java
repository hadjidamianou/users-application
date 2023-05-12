package com.example.simpleWebApplication.repository;

import com.example.simpleWebApplication.entity.UserR;
import com.example.simpleWebApplication.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserR,Integer> {

}

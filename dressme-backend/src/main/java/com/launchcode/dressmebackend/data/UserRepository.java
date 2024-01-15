package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByName(String name);
    User findByEmailandPassword(String email, String password);
    User findByEmail(String email);
    User findBySessionId(String sessionId);
    

}
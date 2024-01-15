package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByName(String name);
    Optional<User> findByEmail(String email);
    

}
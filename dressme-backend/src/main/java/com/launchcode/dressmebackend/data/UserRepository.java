package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
    

}
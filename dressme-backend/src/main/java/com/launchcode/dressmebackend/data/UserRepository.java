package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByFirstName(String firstName);
    User findByLastName(String lastName);
    User findByEmailAndPwHash(String email, String pwHash);
    User findByEmail(String email);
    User findBySessionId(Integer sessionId);
    

}
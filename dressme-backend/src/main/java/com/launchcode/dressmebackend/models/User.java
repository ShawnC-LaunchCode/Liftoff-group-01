package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//I can make user class extend AbstractEntity after merge
@Entity
public class User {

    @NotNull
    private String username;

    @NotNull
    private String pwHash;

    public User(){}

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String username, String password){
        this.username=username;
        this.pwHash=encoder.encode(password);
    }

    public String getUsername(){
        return username;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}

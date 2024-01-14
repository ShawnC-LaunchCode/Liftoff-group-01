package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//I can make user class extend AbstractEntity after merge
//TODO: I believe once I extend abstractEntity, the error about user.getId will go away.

@Entity
public class User extends UserAbstractEntity{

    @NotNull
    private String name;

    @NotNull
    private String pwHash;

    public User(){}

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String name, String password){
        this.name=name;
        this.pwHash=encoder.encode(password);
    }

    public String getUsername(){
        return name;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}

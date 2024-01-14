package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Entity
public class User extends UserAbstractEntity{

    @NotNull
    private String name;

    @NotNull
    private String pwHash;

    @NotNull
    private String email; 

    public User(){}

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String name, String password, String email){
        this.name=name;
        this.email=email;
        this.pwHash=encoder.encode(password);
    }

    public String getName(){
        return name;
    }

    public String getEmail(){
        return email;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

}

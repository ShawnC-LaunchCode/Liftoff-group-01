package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.launchcode.dressmebackend.data.UserRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Entity
public class User extends AbstractEntity{

    @NotNull
    @NotEmpty
    private String firstName;

    @NotNull
    @NotEmpty
    private String lastName;

    @NotNull
    private String pwHash;

    @NotNull
    @NotEmpty
    private String email;

    @NotNull
    @NotEmpty
    private String zipcode;

    public User(){};

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String firstName, String lastName,String password, String email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.pwHash=encoder.encode(password);

    }

    public String getFirstName(){
        return firstName;
    }
    public String getLastName(){return lastName;}

    public String getEmail(){
        return email;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }


}

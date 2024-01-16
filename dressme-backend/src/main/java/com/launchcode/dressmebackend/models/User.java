package com.launchcode.dressmebackend.models;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;



@Entity
public class User extends UserAbstractEntity{

    @NotNull
    private String username;

    @NotNull
    private String pwHash;

    private String zipCode;

    private  List<String> everydayDresscode;


    @ElementCollection(fetch= FetchType.EAGER)
    private List<String> stylePreferences;

    @ElementCollection(fetch= FetchType.EAGER)
    private List<String> everdayDresscode;

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

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public List<String> getStylePreferences() {
        return stylePreferences;
    }

    public void setStylePreferences(List<String> stylePreferences) {
        this.stylePreferences = stylePreferences;
    }

    public List<String> getEverydayDresscode() {
        return everydayDresscode;
    }

    public void setEverydayDresscode(List<String> everydayDresscode) {
        this.everydayDresscode = everydayDresscode;
    }

}

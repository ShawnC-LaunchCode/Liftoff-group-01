package com.launchcode.dressmebackend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;



@Entity

public class User extends UserAbstractEntity{


    @NotNull
    private String username;

    @NotNull
    private String pwHash;

    @OneToOne(cascade = CascadeType.ALL)
    private Zipcode zipcode;

   // private  List<String> everydayDresscode;


    @ElementCollection(fetch= FetchType.EAGER)
    private List<String> stylePreferences;

//    @ElementCollection(fetch= FetchType.EAGER)
//    private List<String> everydayDresscodeOptions;
@OneToOne(cascade = CascadeType.ALL)
    private Dresscode dresscode;

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

    public Zipcode getZipcode() {
        return zipcode;
    }

    public void setZipCode(Zipcode zipCode) {
        this.zipcode = zipcode;
    }

    public List<String> getStylePreferences() {
        return stylePreferences;
    }

    public void setStylePreferences(List<String> stylePreferences) {
        this.stylePreferences = stylePreferences;
    }

    public Dresscode getDresscode(){
        return dresscode;
    }

    public void setDresscode(Dresscode dresscode) {
        this.dresscode=dresscode;
    }

//    public List<String> getEverydayDresscodeOptions() {
//        return everydayDresscodeOptions;
//    }
//
//    public void setEverydayDresscodeOptions(List<String> everydayDresscodeOptions) {
//        this.everydayDresscodeOptions = everydayDresscodeOptions;

    //}





}



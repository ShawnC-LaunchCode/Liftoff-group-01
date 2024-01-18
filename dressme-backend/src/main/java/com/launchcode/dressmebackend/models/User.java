package com.launchcode.dressmebackend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Entity
public class User extends UserAbstractEntity {

    @NotNull
    private String username;

    @NotNull
    private String pwHash;

//    @OneToOne(cascade = CascadeType.ALL)
    private String zipcode;

    @Column(name = "style_preferences")
    private String stylePreferences;

    @OneToOne
    private Dresscode dresscode;


    @Column(name = "zip_code")
    private String dresscodePreferences;

    @Column(name = "session_id")
    private Integer sessionID = 0;

    public User() {
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String username, String password) {
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public String getUsername() {
        return username;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getStylePreferences() {
        return stylePreferences;
    }

    public void setStylePreferences(String stylePreferences) {
        this.stylePreferences = stylePreferences;
    }

    public Dresscode getDresscode() {
        return dresscode;
    }

    public List<String> getDresscodePreferences() {
        return Arrays.stream(dresscodePreferences.split(",")).toList();
    }

    public void setDresscodePreferences(List<String> dresscodePreferences) {
        this.dresscodePreferences = String.join(",", dresscodePreferences);;
    }

    public void setDresscode(Dresscode dresscode) {
        this.dresscode = dresscode;
    }
}


//package com.launchcode.dressmebackend.models;
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotNull;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//import java.util.List;
//
//
//
//@Entity
//
//public class User extends UserAbstractEntity{
//
//
//    @NotNull
//    private String username;
//
//    @NotNull
//    private String pwHash;
//
//    @OneToOne(cascade = CascadeType.ALL)
//    private Zipcode zipcode;
//
//    @ElementCollection(fetch= FetchType.EAGER)
//    private List<String> stylePreferences;
//
//
//@OneToOne
//    private Dresscode dresscode;
//
//@ElementCollection(fetch=FetchType.EAGER)
//private DresscodePreferences dresscodePreferences;
//
//    public User(){}
//
//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//    public User(String username, String password){
//        this.username=username;
//        this.pwHash=encoder.encode(password);
//    }
//
//    public String getUsername(){
//        return username;
//    }
//
//    public boolean isMatchingPassword(String password) {
//        return encoder.matches(password, pwHash);
//    }
//
//    public Zipcode getZipcode() {
//        return zipcode;
//    }
//
//    public void setZipCode(Zipcode zipCode) {
//        this.zipcode = zipcode;
//    }
//
//    public List<String> getStylePreferences() {
//        return stylePreferences;
//    }
//
//    public void setStylePreferences(List<String> stylePreferences) {
//        this.stylePreferences = stylePreferences;
//    }
//
//    public Dresscode getDresscode(){
//        return dresscode;
//    }
//
//    public List<String> getDresscodePreferences() {
//        return dresscodePreferences;
//    }
//
//    public void setDresscodePreferences(List<String> dresscodePreferences) {
//        this.dresscodePreferences = dresscodePreferences;
//    }
//
//    public void setDresscode(Dresscode dresscode) {
//        this.dresscode=dresscode;









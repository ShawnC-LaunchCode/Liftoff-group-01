package com.launchcode.dressmebackend.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RegisterFormDTO {

    @NotNull
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters.")
    private String firstName;

    @NotNull
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters.")
    private String lastName;

    @NotNull
    @Email(message = "Invalid email address")
    private String email;

    @NotNull
    @Size(min = 5, max = 30, message = "Password must be between 5 and 30 characters.")
    private String password;

    // Constructors, getters, and setters

    public RegisterFormDTO() {
        // Default constructor
    }

    public RegisterFormDTO(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName=lastName;
        this.email = email;
        this.password = password;
    }

    // Getters and setters

    public String getFirstName() {
        return firstName;
    }

    public String getLastName(){ return lastName;}

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName){ this.lastName= lastName;}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}



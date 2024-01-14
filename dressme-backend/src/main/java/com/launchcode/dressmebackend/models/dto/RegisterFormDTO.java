package com.launchcode.dressmebackend.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RegisterFormDTO {

    @NotNull
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters.")
    private String name;

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

    public RegisterFormDTO(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

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


// public class RegisterFormDTO extends LoginFormDTO{

//     private String verifyPassword;

//     public String getVerifyPassword() {
//         return verifyPassword;
//     }

//     public void setVerifyPassword(String verifyPassword) {
//         this.verifyPassword = verifyPassword;
//     }
// }
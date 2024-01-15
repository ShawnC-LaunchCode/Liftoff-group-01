package com.launchcode.dressmebackend.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginFormDTO {
    @NotNull(message="email is required.")
    @NotBlank
    @Size(min = 1, message = "Email is required.")
    @Email (message= "Email is not well formatted.")
    private String email;

    private String name;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
    private String pwHash;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getpwHash() {
        return pwHash;
    }

    public void setPassword(String pwHash) {
        this.pwHash = pwHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
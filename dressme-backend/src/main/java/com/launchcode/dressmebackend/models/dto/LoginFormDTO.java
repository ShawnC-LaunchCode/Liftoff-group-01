package com.launchcode.dressmebackend.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginFormDTO {
//    @NotNull
//    @NotBlank
//    @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.")
    private String name;

//    @NotNull
//    @NotBlank
//    @Size(min = 5, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
    private String password;
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
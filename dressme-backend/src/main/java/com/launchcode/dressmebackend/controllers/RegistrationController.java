package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.User;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import com.launchcode.dressmebackend.models.dto.LoginFormDTO;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;
import com.launchcode.dressmebackend.exception.ErrorResponse;

@RestController
@RequestMapping("/Register")
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<String> registerUser(@RequestBody RegisterFormDTO registerFormDTO) {
        try {
            // Simple validation
            if (registerFormDTO.getName() == null || registerFormDTO.getEmail() == null || registerFormDTO.getPassword() == null) {
                return ResponseEntity.badRequest().body("Please provide all registration fields");
            }

            // Check if the user with the given name already exists
            if (userRepository.findByName(registerFormDTO.getName()) != null) {
                return ResponseEntity.badRequest().body("A user with that name already exists");
            }

            // Create a new user and save to the database
            User newUser = new User(registerFormDTO.getName(), registerFormDTO.getPassword(), registerFormDTO.getEmail());
            userRepository.save(newUser);

            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error");
        }
    }
}

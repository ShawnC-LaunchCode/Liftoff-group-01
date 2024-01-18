package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.StylePreferencesRepository;
import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.StylePreferences;
import com.launchcode.dressmebackend.models.User;
import com.launchcode.dressmebackend.models.Zipcode;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StylePreferencesController {

    @Autowired
    StylePreferencesRepository stylePreferencesRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/StylePreferences")
    public ResponseEntity<String> addStylePreferences(@RequestBody Request body) {
        User user = userRepository.findByUsername(body.username()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        return zipcodeRepository.save(zipcode);
        }

        user.setStylePreferences(body.selectedOption());
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Style Preferences Created");


    }

    public record Request(String selectedOption, String username) {}
}

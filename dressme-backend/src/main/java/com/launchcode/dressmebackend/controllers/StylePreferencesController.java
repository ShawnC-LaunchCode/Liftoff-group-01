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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("stylePreferences")
public class StylePreferencesController {

    @Autowired
    StylePreferencesRepository stylePreferencesRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/{id}")
    public ResponseEntity<String> addStylePreferences(@RequestBody StylePreferences stylePreferences, @PathVariable int id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        return zipcodeRepository.save(zipcode);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Style Preferences Created");


    }
}

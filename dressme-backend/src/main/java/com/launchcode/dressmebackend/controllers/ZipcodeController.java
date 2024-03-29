package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.data.ZipcodeRepository;
import com.launchcode.dressmebackend.exception.ClothNotFoundException;
import com.launchcode.dressmebackend.models.*;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ZipcodeController {

    @Autowired
    private ZipcodeRepository zipcodeRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/Zipcode")
    public ResponseEntity<String> addZipcode(@RequestBody Request body) {
        User user = userRepository.findByUsername(body.username()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        return zipcodeRepository.save(zipcode);
        }
        user.setZipcode(body.newZipcode());
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Zip Code Created");
    }

    public record Request(String newZipcode, String username) {}
}





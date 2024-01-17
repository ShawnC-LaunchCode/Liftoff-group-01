package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.DresscodeRepository;
import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.Dresscode;
import com.launchcode.dressmebackend.models.User;
import com.launchcode.dressmebackend.models.Zipcode;
import jakarta.servlet.http.HttpSession;
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
@RequestMapping("dresscode")

public class DresscodeController {
    @Autowired
    DresscodeRepository dresscodeRepository;

    @Autowired
    UserRepository userRepository;


    @PostMapping("/{userId}")

    public ResponseEntity<String> addDresscode(@RequestBody Dresscode dresscode, @PathVariable int userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        return zipcodeRepository.save(zipcode);
        }
        user.setDresscode(dresscode);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Dresscode Created");
    }

}


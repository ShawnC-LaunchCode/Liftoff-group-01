package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class ZipcodeController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/zipcode")
    public ResponseEntity<?> getUserZipcode() {
        try {

            String userEmail = "user@example.com";

            Optional<User> userOptional = userRepository.findByEmail(userEmail);

            if (userOptional.isPresent()) {
                User user = userOptional.get();
                return ResponseEntity.ok(user.getZipcode());
            } else {
                return ResponseEntity.ok(null);
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error fetching zipcode");
        }
    }

    @PostMapping("/zipcode")
    public ResponseEntity<?> saveUserZipcode(@RequestBody String zipcode) {
        try {
            // You might get the logged-in user's email from the authentication context
            // For simplicity, let's assume it's hard-coded here
            String userEmail = "user@example.com";

            Optional<User> userOptional = userRepository.findByEmail(userEmail);

            if (userOptional.isPresent()) {
                User user = userOptional.get();
                user.setZipcode(zipcode);
                userRepository.save(user);
                return ResponseEntity.ok("Zipcode saved successfully!");
            } else {
                return ResponseEntity.badRequest().body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error saving zipcode");
        }
    }

    @PutMapping("/zipcode")
    public ResponseEntity<?> updateUserZipcode(@RequestBody String zipcode) {
        try {
            // You might get the logged-in user's email from the authentication context
            // For simplicity, let's assume it's hard-coded here
            String userEmail = "user@example.com";

            Optional<User> userOptional = userRepository.findByEmail(userEmail);

            if (userOptional.isPresent()) {
                User user = userOptional.get();
                user.setZipcode(zipcode);
                userRepository.save(user);
                return ResponseEntity.ok("Zipcode updated successfully!");
            } else {
                return ResponseEntity.badRequest().body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error updating zipcode");
        }
    }
}


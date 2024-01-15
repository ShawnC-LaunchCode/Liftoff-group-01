package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.SaveZipcodeRequest;
import com.launchcode.dressmebackend.models.UpdateZipcodeRequest;
import com.launchcode.dressmebackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/zipcode")
    public ResponseEntity<?> getUserZipcode(@RequestParam String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(user.getZipcode());
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @PostMapping("/zipcode")
    public ResponseEntity<?> saveUserZipcode(@RequestBody SaveZipcodeRequest request) {
        String email = request.getEmail();
        String zipcode = request.getZipcode();

        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setZipcode(zipcode);
            userRepository.save(user);
            return ResponseEntity.ok("Zipcode saved successfully!");
        } else {
            return ResponseEntity.badRequest().body("User not found");
        }
    }

    @PutMapping("/zipcode")
    public ResponseEntity<?> updateUserZipcode(@RequestBody UpdateZipcodeRequest request) {
        String email = request.getEmail();
        String zipcode = request.getZipcode();

        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setZipcode(zipcode);
            userRepository.save(user);
            return ResponseEntity.ok("Zipcode updated successfully!");
        } else {
            return ResponseEntity.badRequest().body("User not found");
        }
    }
}




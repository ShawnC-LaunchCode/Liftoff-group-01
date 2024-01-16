package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.UpdateEverydayDresscodeRequest;
import com.launchcode.dressmebackend.models.UpdateStylePreferencesRequest;
import com.launchcode.dressmebackend.models.UpdateZipCodeRequest;
import com.launchcode.dressmebackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping("/api/settings")
    public class SettingsController {

        @Autowired
        private UserRepository userRepository; // Assuming you have a UserRepository

        @PostMapping("/update-zipcode")
        public ResponseEntity<String> updateZipCode(@RequestBody UpdateZipCodeRequest request) {
            // Validate request and update user's zip code
            User user = userRepository.findById(request.getUserId()).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            user.setZipCode(request.getZipCode());
            userRepository.save(user);
            return ResponseEntity.ok("Zip code updated successfully");
        }

        @PostMapping("/update-style-preferences")
        public ResponseEntity<String> updateStylePreferences(@RequestBody UpdateStylePreferencesRequest request) {
            // Validate request and update user's style preferences
            User user = userRepository.findById(request.getUserId()).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            user.setStylePreferences(request.getSelectedOptions());
            userRepository.save(user);
            return ResponseEntity.ok("Style preferences updated successfully");
        }

        @PostMapping("/update-everyday-dresscode")
        public ResponseEntity<String> updateEverydayDresscode(@RequestBody UpdateEverydayDresscodeRequest request) {
            // Validate request and update user's everyday dress code preferences
            User user = userRepository.findById(request.getUserId()).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            user.setEverydayDresscode(request.getSelectedOptions());
            userRepository.save(user);
            return ResponseEntity.ok("Everyday dress code preferences updated successfully");
        }
}

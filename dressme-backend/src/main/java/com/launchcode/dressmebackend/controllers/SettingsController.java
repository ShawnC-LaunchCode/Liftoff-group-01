package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.Settings;
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

    @PostMapping("/update-settings")
    public ResponseEntity<String> updateSettings(@RequestBody Settings settings) {
        // Validate request and update user's settings
        User user = userRepository.findById(settings.getUserId()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        // Update everyday dress code preferences
        if (settings.getEverydayDressCodeOptions() != null) {
            user.setEverydayDresscode(settings.getEverydayDressCodeOptions());
        }

        // Update style preferences
        if (settings.getStylePreferencesOptions() != null) {
            user.setStylePreferences(settings.getStylePreferencesOptions());
        }

        // Update zip code
        if (settings.getZipCode() != null) {
            user.setZipCode(settings.getZipCode());
        }

        userRepository.save(user);
        return ResponseEntity.ok("User settings updated successfully");
    }
}



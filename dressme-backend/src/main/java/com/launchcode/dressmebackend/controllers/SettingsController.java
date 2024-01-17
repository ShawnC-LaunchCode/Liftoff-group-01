package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.SettingsRepository;
import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.Settings;
import com.launchcode.dressmebackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/settings")
public class SettingsController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    SettingsRepository settingsRepository;

    private User user;

    @PostMapping("/{id}")
    public ResponseEntity<String> updateSettings(@RequestBody Settings settings, @PathVariable int id) {
        // Validate request and update user's settings
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        // Update everyday dress code preferences
        if (settings.getEverydayDressCodeOptions() != null) {
            user.setEverydayDresscodeOptions(settings.getEverydayDressCodeOptions());
           // return ResponseEntity.status(HttpStatus.ACCEPTED).body("Updated Dresscode");
        }

        // Update style preferences
        if (settings.getStylePreferencesOptions() != null) {
            user.setStylePreferences(settings.getStylePreferencesOptions());
           // return ResponseEntity.status(HttpStatus.ACCEPTED).body("Updated Style Preferences");
        }

        // Update zip code
        if (settings.getZipCode() != null) {
            user.setZipCode(settings.getZipCode());
           // return ResponseEntity.status(HttpStatus.ACCEPTED).body("Updated Zip Code");
        }

        settingsRepository.save(settings);
        userRepository.save(user);
        return ResponseEntity.ok("User settings updated successfully");
    }
}



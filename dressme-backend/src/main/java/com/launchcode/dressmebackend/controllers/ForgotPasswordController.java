package com.launchcode.dressmebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ForgotPasswordController {
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        // TODO: Implement logic to generate a password reset token and send an email

        sendResetEmail(email);


        return ResponseEntity.ok(Map.of("success", true, "message", "Password reset email sent."));
    }

    private void sendResetEmail(String email) {
        // TODO: Implement sending a password reset email

    }
}

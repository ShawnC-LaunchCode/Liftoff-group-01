package com.launchcode.dressmebackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
public class ForgotPasswordController {

    @Autowired
    private JavaMailSender javaMailSender;

    private Map<String,String> resetTokens= new HashMap<>();
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        // TODO: Implement logic to generate a password reset token and send an email
        String resetToken = UUID.randomUUID().toString();

        resetTokens.put(email, resetToken);

        sendResetEmail(email, resetToken);

        return ResponseEntity.ok(Map.of("success", true, "message", "Password reset email sent."));

    }


    private void sendResetEmail(String email, String resetToken) {
        SimpleMailMessage message= new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset Request");
        message.setText("To reset your password, click the following link: "+"http://localhost:8080/reset-password?token="+ resetToken);

        javaMailSender.send(message);
    }
}

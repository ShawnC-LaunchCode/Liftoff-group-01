package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ForgotPasswordRepository;
import com.launchcode.dressmebackend.models.ForgotPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
public class ForgotPasswordController {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        // Check if there is an existing token for the given email
        Optional<ForgotPassword> existingToken = forgotPasswordRepository.findByEmail(email);

        String resetToken = (existingToken.isPresent()) ? existingToken.get().getResetToken() : UUID.randomUUID().toString();

        // Save or update the reset token in the repository
        ForgotPassword forgotPassword = new ForgotPassword();
        forgotPassword.setEmail(email);
        forgotPassword.setResetToken(resetToken);
        forgotPassword.setCreatedAt(LocalDateTime.now());
        forgotPasswordRepository.save(forgotPassword);

        sendResetEmail(email, resetToken);

        return ResponseEntity.ok(Map.of("success", true, "message", "Password reset email sent."));
    }

    private void sendResetEmail(String email, String resetToken) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset Request");
        message.setText("To reset your password, click the following link: " + "http://localhost:8080/reset-password?token=" + resetToken);

        javaMailSender.send(message);
    }
}


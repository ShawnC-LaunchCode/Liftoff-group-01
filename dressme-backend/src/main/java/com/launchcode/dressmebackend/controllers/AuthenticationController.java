package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.User;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import com.launchcode.dressmebackend.models.dto.LoginFormDTO;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins ="*")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @GetMapping("/register")
    public ResponseEntity<RegisterFormDTO> displayRegistrationForm() {
        RegisterFormDTO registerFormDTO = new RegisterFormDTO();
        return ResponseEntity.ok(registerFormDTO);
    }



    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterFormDTO registerFormDTO) {

        User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());

        if (existingUser != null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "User already exists"));
        }

        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Passwords do not match"));
        }
        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword());
        userRepository.save(newUser);
        //setUserInSession(request.getSession(), newUser);
        return ResponseEntity.ok(Map.of("success", true, "message", "User registered successfully"));

    }
    @GetMapping("/login")
    public ResponseEntity<LoginFormDTO> displayLoginForm() {
        LoginFormDTO loginFormDTO = new LoginFormDTO();
        return ResponseEntity.ok(loginFormDTO);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginFormDTO loginFormDTO) {


        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());

        if (theUser == null) {
            return ResponseEntity.badRequest().body("Invalid username");
        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            return ResponseEntity.badRequest().body("Invalid password");
        }
//Was not receiving success message on front end
        return ResponseEntity.ok(Map.of("success", true, "message", "User registered successfully"));
    }
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return ResponseEntity.ok("Logout successful");
    }


}
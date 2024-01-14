package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.User;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import com.launchcode.dressmebackend.models.dto.LoginFormDTO;
import com.launchcode.dressmebackend.models.dto.RegisterFormDTO;

import java.util.Optional;

@CrossOrigin(origins= "http://localhost:3000", allowCredentials = "true", maxAge=3600)
@RestController
@RequestMapping("/Register")
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

    @PostMapping("/Register")
    public ResponseEntity<String> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO, HttpServletRequest request) {

//        if (errors.hasErrors()) {
//               model.addAttribute("title", "Register");
//            return "Register";
//        }

        User existingUser = userRepository.findByUsername(registerFormDTO.getName());

        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A user with that name already exists");
            //errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists");
            //model.addAttribute("title", "Register");
            //return "Register";
        }

        String password = registerFormDTO.getPassword();
        //String verifyPassword = registerFormDTO.getVerifyPassword(); //If you handle this on the front end, and do not pass this value, you will not need thsi or this field at all in any of your DTOs
        //if (!password.equals(verifyPassword)) {
        // errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
        //model.addAttribute("title", "Register");
        //return "Register";
        //}

        User newUser = new User(registerFormDTO.getName(), registerFormDTO.getPassword(), registerFormDTO.getEmail()); //update to also include a firstName or name field here and in the DTO(s) and model
        userRepository.save(newUser);
        //setUserInSession(request.getSession(), newUser); //decide if assigning a session here makes sense or if you want to assign ewhen they login
        return ResponseEntity.status(HttpStatus.CREATED).body("User was registered");


    }

    @PostMapping("Login")
    public ResponseEntity <String> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO,
                                   Errors errors, HttpServletRequest request,
                                   Model model) {

//        if (errors.hasErrors()) {
//            model.addAttribute("title", "Log In");
//            return "Login";
//        }

        User theUser = userRepository.findByUsername(loginFormDTO.getName());

        if (theUser == null) {
            errors.rejectValue("username", "user.invalid", "The given username does not exist");
            model.addAttribute("title", "Log In");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Credentials, Login Failed");
        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            model.addAttribute("title", "Log In");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Credentials, Login Failed");
        }

        setUserInSession(request.getSession(), theUser);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("User Logged in successfully");
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }

}
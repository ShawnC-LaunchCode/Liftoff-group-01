package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.models.dto.LoginFormDTO;
import com.launchcode.dressmebackend.exception.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import com.launchcode.dressmebackend.controllers.RegistrationController;
import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.models.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Optional;


@CrossOrigin(origins = "*", allowedHeaders={"Content-Type"})
@RestController
@RequestMapping("/UserLogin")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    private static final String sessionID = "user";

    public User getUserFromSession(HttpSession session, UserRepository userRepository) {
        Integer userId = (Integer) session.getAttribute(sessionID);
        if (userId == null) {
            return null;
        }

        return userRepository.findBySessionId(userId); //.orElse(null);
    }

    private void setUserInSession(HttpSession session, User user) {
        session.setAttribute(sessionID, user.getSessionId());
    }

    @PostMapping (value = "/UserLogin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO, Errors errors,
                                                   HttpServletRequest request, Model model) {
        User theUser = userRepository.findByEmailAndPwHash(loginFormDTO.getEmail(), loginFormDTO.getpwHash());

        if (theUser != null) {
            setUserInSession(request.getSession(), theUser);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Invalid credentials, login failed."));
        }

    }
    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "UserLogin";
    }
}

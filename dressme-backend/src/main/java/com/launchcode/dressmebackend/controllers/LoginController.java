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

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session, UserRepository userRepository) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        return userRepository.findById(userId).orElse(null);
    }

    private void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @PostMapping //("/UserLogin")
    public ResponseEntity<Object> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO, Errors errors,
                                                   HttpServletRequest request, Model model) {
        User theUser = userRepository.findByEmailandPassword(loginFormDTO.getEmail(), loginFormDTO.getPassword());


        if (theUser == null) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Invalid credentials, login failed."));
        }

            if (!theUser.isMatchingPassword(loginFormDTO.getPassword())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ErrorResponse("Invalid credentials, login failed."));
            } else {
                setUserInSession(request.getSession(), theUser);
                return ResponseEntity.status(HttpStatus.ACCEPTED).body("Login successful!");
            }
    }
    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "UserLogin";
    }
}

package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.DresscodeRepository;
import com.launchcode.dressmebackend.data.UserRepository;
import com.launchcode.dressmebackend.exception.ResourceNotFoundError;
import com.launchcode.dressmebackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class DresscodeController {
    @Autowired
    DresscodeRepository dresscodeRepository;

    @Autowired
    UserRepository userRepository;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/dresscode", produces = MediaType.APPLICATION_JSON_VALUE)
    public String addDresscode(@RequestBody Request body) {
        User user = userRepository.findByUsername(body.username()).orElse(null);
        if (user == null) {
            throw new ResourceNotFoundError("User not found");
        }
//        List<String> selectedOptions=dresscode.getSelectedOptions();
        user.setDresscodePreferences(body.selectedOptions());
        userRepository.save(user);
        return "Dresscode Created";
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundError.class)
    public void errorHandler() {}

    public record Request(List<String> selectedOptions, String username) {}
}
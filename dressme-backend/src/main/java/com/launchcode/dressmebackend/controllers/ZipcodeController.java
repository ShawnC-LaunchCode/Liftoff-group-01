package com.launchcode.dressmebackend.controllers;


import com.launchcode.dressmebackend.data.ZipcodeRepository;
import com.launchcode.dressmebackend.models.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("zipcode")
public class ZipcodeController {

    @Autowired
    private ZipcodeRepository zipcodeRepository;

    @PostMapping("/{id}")
    public Zipcode addZipcode(@RequestBody Zipcode zipcode) {
        return zipcodeRepository.save(zipcode);
    }


//    @PutMapping("/{id}")
//    public Zipcode updateZipcode(@RequestBody Zipcode zipCode, @PathVariable int id) {
//        return ZipcodeRepository.findById(id)
//
//                .orElseThrow(() -> new ClothNotFoundException(id));
//    }
}

package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ClothCategoryRepository;
import com.launchcode.dressmebackend.models.ClothCategory;
import com.launchcode.dressmebackend.exception.ClothCategoryNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("clothCategories")
public class ClothCategoryController {

    @Autowired
    private ClothCategoryRepository clothCategoryRepository;

    private ClothCategory clothCategory;


    @GetMapping
    public List<ClothCategory> getAllClothCategory() {
        return clothCategoryRepository.findAll();
       }

//    @GetMapping
//    public ResponseEntity<?> getAllClothCategory() {
//
//        List<ClothCategory> artworks = (List<ClothCategory>) clothCategoryRepository.findAll();
//        return new ResponseEntity<>(artworks, HttpStatus.OK);
//    }

    @PostMapping("create")
    public ClothCategory addClothCategory(@RequestBody ClothCategory clothCategory) {
        return clothCategoryRepository.save(clothCategory);
    }

    @GetMapping("/{id}")
    public ClothCategory getClothCategoryById(@PathVariable int id) {
        return clothCategoryRepository.findById(id)
                .orElseThrow(() -> new ClothCategoryNotFoundException(id));
    }

    @PutMapping("/{id}")
    public ClothCategory updateClothCategory(@RequestBody ClothCategory clothCategory, @PathVariable int id) {
        return clothCategoryRepository.findById(id)
                .map(clothCategory1 -> {
                    clothCategory1.setName(clothCategory.getName());
                    return clothCategoryRepository.save(clothCategory1);
                }).orElseThrow(() -> new ClothCategoryNotFoundException(id));
    }
    @DeleteMapping("/{id}")
    public String deleteClothCategory(@PathVariable int id){
        if(!clothCategoryRepository.existsById(id)){
            throw new ClothCategoryNotFoundException(id);
        }
        clothCategoryRepository.deleteById(id);
        return  "ClothCategory with id "+id+" has been deleted success.";
    }


}

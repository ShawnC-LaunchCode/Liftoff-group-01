package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ClothCategoryRepository;
import com.launchcode.dressmebackend.data.ClothRepository;
import com.launchcode.dressmebackend.exception.ClothCategoryNotFoundException;
import com.launchcode.dressmebackend.exception.ClothNotFoundException;
import com.launchcode.dressmebackend.models.Cloth;
import com.launchcode.dressmebackend.models.ClothCategory;
import com.launchcode.dressmebackend.models.Gender;
import com.launchcode.dressmebackend.models.WeatherTag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("cloths")
public class ClothController {

    @Autowired
    private ClothRepository clothRepository;

    @Autowired
    private ClothCategoryRepository clothCategoryRepository;


    @GetMapping
    List<Cloth> getAllCloth() {
        return clothRepository.findAll();
    }

    @PostMapping("create")
    public Cloth addCloth(@RequestBody Cloth cloth) {
        return clothRepository.save(cloth);
    }

    @GetMapping("/{id}")
    public Cloth getClothById(@PathVariable int id) {
        return clothRepository.findById(id).orElseThrow(() -> new ClothCategoryNotFoundException(id));

    }

    @PutMapping("/{id}")
    public Cloth updateCloth(@RequestBody Cloth cloth, @PathVariable int id) {
        return clothRepository.findById(id)
                .map(cloth1 -> {
                    cloth1.setName(cloth.getName());
                    return clothRepository.save(cloth1);
                }).orElseThrow(() -> new ClothNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public String deleteCloth(@PathVariable int id){
        if(!clothRepository.existsById(id)){
            throw new ClothNotFoundException(id);
        }
        clothRepository.deleteById(id);
        return  "Cloth with id "+id+" has been deleted success.";
    }


}

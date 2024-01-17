package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ClothRepository;
import com.launchcode.dressmebackend.data.MyclosetRepository;
import com.launchcode.dressmebackend.exception.ClothCategoryNotFoundException;
import com.launchcode.dressmebackend.exception.ClothNotFoundException;
import com.launchcode.dressmebackend.exception.MyclosetNotFoundException;
import com.launchcode.dressmebackend.models.Cloth;
import com.launchcode.dressmebackend.models.Mycloset;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("mycloset")
public class MyclosetController {

    @Autowired
    private MyclosetRepository myclosetRepository;

    @GetMapping
    List<Mycloset> getAllMycloset() {
        return myclosetRepository.findAll();
    }

    @PostMapping("create")
    public Mycloset addCloth(@RequestBody Mycloset mycloset) {
        return myclosetRepository.save(mycloset);
    }

    @GetMapping("/{id}")
    public Mycloset getClothById(@PathVariable int id) {
        return myclosetRepository.findById(id).orElseThrow(() -> new MyclosetNotFoundException(id));

    }

    @PutMapping("/{id}")
    public Mycloset updateCloth(@RequestBody Mycloset mycloset, @PathVariable int id) {
        return myclosetRepository.findById(id)
                .map(mycloset1 -> {
                    mycloset1.setName(mycloset.getName());
                    mycloset1.setGender(mycloset.getGender());
                    mycloset1.setUsername(mycloset.getUsername());
                    mycloset1.setWeatherTag(mycloset.getWeatherTag());
                    mycloset1.setFav(mycloset.isFav());
                    mycloset1.setColor(mycloset.getColor());
                    mycloset1.setClosetLocation(mycloset.getClosetLocation());

                    return myclosetRepository.save(mycloset1);
                }).orElseThrow(() -> new ClothNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public String deleteCloth(@PathVariable int id){
        if(!myclosetRepository.existsById(id)){
            throw new MyclosetNotFoundException(id);
        }
        myclosetRepository.deleteById(id);
        return  "Cloth with id "+id+" has been deleted success.";
    }



}

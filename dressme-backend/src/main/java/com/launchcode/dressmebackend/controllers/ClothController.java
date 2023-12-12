package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ClothCategoryRepository;
import com.launchcode.dressmebackend.data.ClothRepository;
import com.launchcode.dressmebackend.models.Cloth;
import com.launchcode.dressmebackend.models.ClothCategory;
import com.launchcode.dressmebackend.models.Gender;
import com.launchcode.dressmebackend.models.WeatherTag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("cloths")
public class ClothController {

    @Autowired
    private ClothRepository clothRepository;

    @Autowired
    private ClothCategoryRepository clothCategoryRepository;



    @GetMapping
    public String displayCloths(@RequestParam(required = false) Integer categoryId, Model model) {

        if (categoryId == null) {
            model.addAttribute("title", "All Cloths");
            model.addAttribute("cloths", clothRepository.findAll());
        } else {
            Optional<ClothCategory> result = clothCategoryRepository.findById(categoryId);
            if (result.isEmpty()) {
                model.addAttribute("title", "Invalid Category ID: " + categoryId);
            } else {
               ClothCategory category = result.get();
                model.addAttribute("title", "Cloths in category: " + category.getName());
                model.addAttribute("cloths", category.getCloths());
            }
        }

        return "cloths/index";
    }

    @GetMapping("create")
    public String displayCreateClothForm(Model model) {
        model.addAttribute("title", "Create Cloths");
        model.addAttribute(new Cloth());
        model.addAttribute("categories", clothCategoryRepository.findAll());
        model.addAttribute("gender",Gender.values());
        model.addAttribute("weather", WeatherTag.values());
        return "cloths/create";
    }

    @PostMapping("create")
    public String processCreateClothForm(@ModelAttribute @Valid Cloth newCloth,
                                         Errors errors, Model model) {
        if(errors.hasErrors()) {
            model.addAttribute("title", "Create Cloths");
            model.addAttribute("categories", clothCategoryRepository.findAll());
            model.addAttribute("gender",Gender.values());
            model.addAttribute("weather", WeatherTag.values());
            return "cloths/create";
        }

        clothRepository.save(newCloth);
        return "redirect:/cloths";
    }



    @GetMapping("delete/{clothId}")
    public String processDeleteClothForm(@PathVariable(required = false) int clothId) {
        clothRepository.deleteById(clothId);
        return "redirect:/cloths";
    }

    @GetMapping("edit/{clothId}")
    public String displayEditClothDetails(@PathVariable int clothId, Model model) {

        Optional<Cloth> result = clothRepository.findById(clothId);

        if (result.isEmpty()) {
            model.addAttribute("title", "Invalid Event ID: " + clothId);
        } else {
            Cloth cloth = result.get();
            model.addAttribute("title", cloth.getName() + " Details");
            model.addAttribute("cloth", cloth);
            model.addAttribute("editCategory",cloth.getClothCategory());
            model.addAttribute("editWeather",cloth.getWeatherTag());
            model.addAttribute("editGender",cloth.getGender());
            model.addAttribute("categories", clothCategoryRepository.findAll());
            model.addAttribute("gender",Gender.values());
            model.addAttribute("weather", WeatherTag.values());

        }

        return "cloths/edit";
    }
    @PostMapping("edit")
    public String processEditForm(@ModelAttribute @Valid Cloth newCloth,
                                  Errors errors, Model model,int clothId){
        Optional<Cloth> result = clothRepository.findById(clothId);

        if (result.isEmpty()) {
            model.addAttribute("title", "Invalid Event ID: " + newCloth.getId());
        } else {
            Cloth cloth = result.get();
            cloth.setClothCategory(newCloth.getClothCategory());
            cloth.setGender(newCloth.getGender());
            cloth.setImageUrl(newCloth.getImageUrl());
            cloth.setWeatherTag(newCloth.getWeatherTag());
            cloth.setName(newCloth.getName());
            clothRepository.save(cloth);
        }
        return "redirect:/cloths";
    }

}

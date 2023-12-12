package com.launchcode.dressmebackend.controllers;

import com.launchcode.dressmebackend.data.ClothCategoryRepository;
import com.launchcode.dressmebackend.models.ClothCategory;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("clothCategories")
public class ClothCategoryController {

    @Autowired
    private ClothCategoryRepository clothCategoryRepository;

    @GetMapping
    public String displayAllCategories(Model model) {
        model.addAttribute("title", "All Categories");
        model.addAttribute("categories", clothCategoryRepository.findAll());
        return "clothCategories/index";
    }

    @GetMapping("create")
    public String renderCreateEventCategoryForm(Model model) {
        model.addAttribute("title", "Create Category");
        model.addAttribute(new ClothCategory());
        return "clothCategories/create";
    }

    @PostMapping("create")
    public String processCreateEventCategoryForm(@Valid @ModelAttribute ClothCategory clothCategory,
                                                 Errors errors, Model model) {

        if (errors.hasErrors()) {
            model.addAttribute("title", "Create Category");
            model.addAttribute(new ClothCategory());
            return "clothCategories/create";
        }

        clothCategoryRepository.save(clothCategory);
        return "redirect:/clothCategories";
    }
}

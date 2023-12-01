package com.launchcode.dressmebackend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("dressme")
public class HomeController {
    @GetMapping
    public String index() {
        return "index";
    }
}

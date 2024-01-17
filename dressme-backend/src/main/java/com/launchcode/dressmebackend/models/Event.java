package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Event {

    @Id
    @GeneratedValue
    private int id;
    @NotNull
    private String event;
}

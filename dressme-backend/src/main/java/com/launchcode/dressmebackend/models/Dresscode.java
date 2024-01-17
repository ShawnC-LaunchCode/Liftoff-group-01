package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Dresscode extends AbstractEntity{

private String preference;
//
//    private String businessCasual;
//
//    private String formal;


    public String getPreference() {
        return preference;
    }

    public void setPreference(String preference) {
        this.preference = preference;
    }

    public Dresscode(String preference){
        this.preference=preference;
    }


}

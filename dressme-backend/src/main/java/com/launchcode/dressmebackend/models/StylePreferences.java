package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import javax.swing.text.Style;

@Entity
public class StylePreferences extends AbstractEntity{

private String sPreference;

    public String getsPreference() {
        return sPreference;
    }

    public void setsPreference(String sPreference) {
        this.sPreference = sPreference;
    }

    public StylePreferences(String sPreference){
        this.sPreference=sPreference;
    }
}

package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;


@Entity
public class Settings extends AbstractEntity{

    private Integer userId;


    // Fields for updating everyday dress code
    private List<String> everydayDressCodeOptions;

    // Fields for updating style preferences
    private List<String> stylePreferencesOptions;

    // Fields for updating zip code
    private String zipCode;

    // Constructors, getters, and setters

//    public Settings(List<String> stylePreferencesOptions) {
//        this.stylePreferencesOptions = stylePreferencesOptions;
//    }

    public Settings(List<String> everydayDressCodeOptions) {
        this.everydayDressCodeOptions = everydayDressCodeOptions;
    }

    public Settings(String zipCode) {
        this.zipCode = zipCode;
    }


    public Integer getUserId() {
        return userId;
    }

//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }

    public List<String> getEverydayDressCodeOptions() {
        return everydayDressCodeOptions;
    }

    public void setEverydayDressCodeOptions(List<String> everydayDressCodeOptions) {
        this.everydayDressCodeOptions = everydayDressCodeOptions;
    }

    public List<String> getStylePreferencesOptions() {
        return stylePreferencesOptions;
    }


    public void setStylePreferencesOptions(List<String> stylePreferencesOptions) {
        this.stylePreferencesOptions = stylePreferencesOptions;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
}



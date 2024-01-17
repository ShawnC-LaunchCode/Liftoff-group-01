package com.launchcode.dressmebackend.models;

import java.util.List;
public class Settings {

    private Integer userId;

    // Fields for updating everyday dress code
    private List<String> everydayDressCodeOptions;

    // Fields for updating style preferences
    private List<String> stylePreferencesOptions;

    // Fields for updating zip code
    private String zipCode;

    // Constructors, getters, and setters

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

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



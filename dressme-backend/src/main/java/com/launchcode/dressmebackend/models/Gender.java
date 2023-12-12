package com.launchcode.dressmebackend.models;

public enum Gender {
    MEN("Men"),
    WOMEN("Women");
    private final String genderName;

    Gender(String genderName) {
        this.genderName = genderName;
    }

    public String getGenderName() {
        return genderName;
    }
}

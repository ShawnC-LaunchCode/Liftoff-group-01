package com.launchcode.dressmebackend.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Cloth extends AbstractEntity{

    @ManyToOne
    @NotNull(message = "Category is required")
    private ClothCategory clothCategory;

    @NotBlank(message = "Image Url is required.")
    private String imageUrl;

    private Gender gender;

    private WeatherTag weatherTag;

    public Cloth(ClothCategory clothCategory, String imageUrl, Gender gender, WeatherTag weatherTag) {
        this.clothCategory = clothCategory;
        this.imageUrl = imageUrl;
        this.gender = gender;
        this.weatherTag = weatherTag;
    }
    public Cloth(){}

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public WeatherTag getWeatherTag() {
        return weatherTag;
    }

    public void setWeatherTag(WeatherTag weatherTag) {
        this.weatherTag = weatherTag;
    }

    public ClothCategory getClothCategory() {
        return clothCategory;
    }

    public void setClothCategory(ClothCategory clothCategory) {
        this.clothCategory = clothCategory;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

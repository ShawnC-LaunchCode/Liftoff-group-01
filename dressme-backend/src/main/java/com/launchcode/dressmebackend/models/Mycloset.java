package com.launchcode.dressmebackend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Mycloset extends AbstractEntity{



    private Gender gender;

    @NotBlank(message = "Username is required.")
    private String username;


    private WeatherTag weatherTag;
    private String color;
    private String closetLocation;
    private boolean isFav;

    public Mycloset( String username, Gender gender, WeatherTag weatherTag,String color,String closetLocation,boolean isFav) {
        this.username=username;

        this.gender = gender;
        this.weatherTag = weatherTag;
        this.color=color;
        this.closetLocation=closetLocation;
        this.isFav=isFav;
    }
    public Mycloset(){}



    public Gender getGender() {
        return gender;
    }

    public String getUsername() {
        return username;
    }

    public WeatherTag getWeatherTag() {
        return weatherTag;
    }

    public String getColor() {
        return color;
    }

    public String getClosetLocation() {
        return closetLocation;
    }

    public boolean isFav() {
        return isFav;
    }



    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setWeatherTag(WeatherTag weatherTag) {
        this.weatherTag = weatherTag;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setClosetLocation(String closetLocation) {
        this.closetLocation = closetLocation;
    }

    public void setFav(boolean fav) {
        isFav = fav;
    }
}

package com.launchcode.dressmebackend.models;

public enum WeatherTag {
    SUMMER("Summer"),
    SPRING("Spring"),
    AUTUMN("Autumn"),
    SNOW("Snow"),
    RAIN("Rain"),
    WINTER("Winter");
    private final String weatherName;

    WeatherTag(String weatherName) {
        this.weatherName = weatherName;
    }

    public String getWeatherName() {
        return weatherName;
    }
}

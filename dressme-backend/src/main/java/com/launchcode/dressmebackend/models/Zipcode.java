package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;

@Entity
public class Zipcode extends AbstractEntity{

    private Integer zipcode;

    public Zipcode(){

    }

    public Integer getZipCode() {
        return zipcode;
    }

    public Zipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public void setZipCode(Integer zipcode) {
        this.zipcode = zipcode;


    }
}

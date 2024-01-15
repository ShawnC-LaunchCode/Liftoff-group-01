package com.launchcode.dressmebackend.models;

public class UpdateZipcodeRequest {
    private String email;
    private String zipcode;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
}

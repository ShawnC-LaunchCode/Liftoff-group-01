package com.launchcode.dressmebackend.models;

public class UpdateZipCodeRequest {
    private Integer userId;
    private String zipCode;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
}

package com.launchcode.dressmebackend.models;


import java.util.List;

public class UpdateStylePreferencesRequest {
    private Integer userId;
    private List<String> selectedOptions;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<String> getSelectedOptions() {
        return selectedOptions;
    }

    public void setSelectedOptions(List<String> selectedOptions) {
        this.selectedOptions = selectedOptions;
    }
}

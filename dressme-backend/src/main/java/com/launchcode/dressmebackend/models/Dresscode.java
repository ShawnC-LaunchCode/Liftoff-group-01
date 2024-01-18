package com.launchcode.dressmebackend.models;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;

import java.util.List;

@Entity
public class Dresscode extends AbstractEntity {

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> selectedOptions;

    private String preference;

    public List<String> getSelectedOptions() {
        return selectedOptions;
    }

    public void setSelectedOptions(List<String> selectedOptions) {
        this.selectedOptions = selectedOptions;
    }

    public String getPreference() {
        return preference;
    }

    public void setPreference(String preference) {
        this.preference = preference;
    }

    public Dresscode(String preference, List<String> selectedOptions) {
        this.preference = preference;
        this.selectedOptions = selectedOptions;
    }

    public Dresscode() {
    }
}


//package com.launchcode.dressmebackend.models;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
//
//import java.util.List;
//
//@Entity
//public class Dresscode extends AbstractEntity {
//
//    private List<String> selectedOptions;
//
//    public List<String> getSelectedOptions() {
//        return selectedOptions;
//    }
//
//    public void setSelectedOptions(List<String> selectedOptions) {
//        this.selectedOptions = selectedOptions;
//    }
//
//    private String preference;
//
//    ////
//////    private String businessCasual;
//////
//////    private String formal;
////
////
//    public String getPreference() {
//        return preference;
//    }
//
//    public void setPreference(String preference) {
//        this.preference = preference;
//    }
//
//    public Dresscode(String preference) {
//        this.preference = preference;
//    }
//
//    public Dresscode() {
//    }
//}
//

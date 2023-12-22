package com.launchcode.dressmebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
public class ClothCategory extends AbstractEntity{


    @OneToMany//(mappedBy = "clothCategory")
    @JoinColumn(name="cloth_category_id")
    @JsonIgnore
    private final List<Cloth> cloths = new ArrayList<>();

    public ClothCategory() {}

    public List<Cloth> getCloths() {
        return cloths;
    }



}

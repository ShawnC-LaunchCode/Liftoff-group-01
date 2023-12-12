package com.launchcode.dressmebackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
public class ClothCategory extends AbstractEntity{

    @OneToMany(mappedBy = "clothCategory")
    private final List<Cloth> cloths = new ArrayList<>();

    public ClothCategory() {}

    public List<Cloth> getCloths() {
        return cloths;
    }

}

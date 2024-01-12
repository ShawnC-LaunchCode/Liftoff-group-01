package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.Cloth;
import com.launchcode.dressmebackend.models.ClothCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothCategoryRepository extends JpaRepository<ClothCategory, Integer> {
}

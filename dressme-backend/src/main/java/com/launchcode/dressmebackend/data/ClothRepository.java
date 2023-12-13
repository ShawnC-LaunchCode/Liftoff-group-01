package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.Cloth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothRepository extends JpaRepository<Cloth, Integer> {
}

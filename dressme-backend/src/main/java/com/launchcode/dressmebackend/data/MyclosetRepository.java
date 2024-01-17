package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.Cloth;
import com.launchcode.dressmebackend.models.Mycloset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyclosetRepository extends JpaRepository<Mycloset, Integer> {
}

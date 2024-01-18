package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.Dresscode;
import com.launchcode.dressmebackend.models.Zipcode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DresscodeRepository extends JpaRepository<Dresscode, Integer>{

}
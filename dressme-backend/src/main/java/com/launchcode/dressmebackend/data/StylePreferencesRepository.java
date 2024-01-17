package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.AbstractEntity;
import com.launchcode.dressmebackend.models.StylePreferences;
import jakarta.persistence.EntityListeners;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StylePreferencesRepository extends JpaRepository<StylePreferences, Integer> {
}

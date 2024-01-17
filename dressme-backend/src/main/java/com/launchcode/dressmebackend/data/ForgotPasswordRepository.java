package com.launchcode.dressmebackend.data;

import com.launchcode.dressmebackend.models.ForgotPassword;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ForgotPasswordRepository extends JpaRepository<ForgotPassword, String> {
    Optional<ForgotPassword> findByEmail(String email);
}

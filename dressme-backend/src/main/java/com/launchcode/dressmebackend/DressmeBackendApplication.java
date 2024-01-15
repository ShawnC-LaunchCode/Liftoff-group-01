package com.launchcode.dressmebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DressmeBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(DressmeBackendApplication.class, args);
	}

	@Bean
	public CorsConfig corsConfig() {
		return new CorsConfig();
	}
}

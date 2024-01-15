package com.launchcode.dressmebackend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.sql.SQLOutput;
import java.util.Collections;


@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        System.out.println("corsConfig being applied!");
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("Arrays.asList(http://localhost:3000")); // You can set specific origins here
        configuration.setAllowedMethods (Collections.singletonList("Arrays.asList(http://localhost:3000")); // You can set specific HTTP methods
        configuration.setAllowedHeaders(Collections.singletonList("Arrays.asList(http://localhost:3000")); // You can set specific headers
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public CorsFilter corsFilter() {
        return new CorsFilter(corsConfigurationSource());
    }
}
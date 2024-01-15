package com.launchcode.dressmebackend.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

@MappedSuperclass
public abstract class AbstractEntity {
    @Id
    @GeneratedValue
    private int sessionId; // changed from id

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 60, message = "Name must be between 3 and 60 characters")
    private String name;

    public int getSessionId() {
        return sessionId;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity entity = (AbstractEntity) o;
        return sessionId == entity.sessionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(sessionId);
    }

}

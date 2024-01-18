package com.launchcode.dressmebackend.exception;

public class ResourceNotFoundError extends RuntimeException {

    public ResourceNotFoundError(String message) {
        super(message);
    }
}
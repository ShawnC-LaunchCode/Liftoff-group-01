package com.launchcode.dressmebackend.exception;

public class ClothNotFoundException extends RuntimeException{
    public ClothNotFoundException(int id){
        super("Could not found the Cloth with id "+ id);
    }
}

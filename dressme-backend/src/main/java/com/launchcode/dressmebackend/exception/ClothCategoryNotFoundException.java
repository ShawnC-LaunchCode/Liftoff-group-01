package com.launchcode.dressmebackend.exception;

public class ClothCategoryNotFoundException extends RuntimeException{
    public ClothCategoryNotFoundException(int id){
        super("Could not found the ClothCategory with id "+ id);
    }
}

package com.launchcode.dressmebackend.exception;

public class MyclosetNotFoundException extends RuntimeException{
    public MyclosetNotFoundException(int id){
        super("Could not found the Cloth with id "+ id);
    }

}

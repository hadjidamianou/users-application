package com.example.simpleWebApplication.model;

public class ApiError {

    private String message;
    private String details;

    public ApiError(String message, String details) {
        this.message = message;
        this.details = details;
    }

    public ApiError() {

    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

}

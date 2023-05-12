package com.example.simpleWebApplication.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class UserDto {

    private Integer id;
    private String name;
    private String surname;
    private String gender;
    private String birthdate;
    private String workAddress;
    private String homeAddress;

    public UserDto(Integer id, String name, String surname, String gender, String birthdate, String workAddress, String homeAddress) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
    }

    public UserDto() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getGender() {
        return gender;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public String getWorkAddress() {
        return workAddress;
    }

    public String getHomeAddress() {
        return homeAddress;
    }
}

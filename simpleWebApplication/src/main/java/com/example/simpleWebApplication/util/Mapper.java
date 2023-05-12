package com.example.simpleWebApplication.util;

import com.example.simpleWebApplication.entity.UserR;
import com.example.simpleWebApplication.model.UserDto;

public class Mapper {

    public static UserDto userToUserDto(UserR userR) {
        return new UserDto(userR.getId(), userR.getName(), userR.getSurname(), userR.getGender(),
                userR.getBirthdate(), userR.getWorkAddress(), userR.getHomeAddress());
    }

    public static UserR userDtoToUser(UserDto userDto) {
        return new UserR(userDto.getId(), userDto.getName(), userDto.getSurname(), userDto.getGender(),
                userDto.getBirthdate(), userDto.getWorkAddress(), userDto.getHomeAddress());
    }
}

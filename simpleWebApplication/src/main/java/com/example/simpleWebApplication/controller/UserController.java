package com.example.simpleWebApplication.controller;

import com.example.simpleWebApplication.entity.UserR;
import com.example.simpleWebApplication.model.ApiError;
import com.example.simpleWebApplication.model.UserDto;
import com.example.simpleWebApplication.repository.UserRepository;
import com.example.simpleWebApplication.util.Mapper;
import jakarta.persistence.GeneratedValue;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto newUser(@RequestBody UserDto userDto) {
        UserR user = Mapper.userDtoToUser(userDto);
        UserR savedUser = userRepository.save(user);
        return Mapper.userToUserDto(savedUser);
    }

    @GetMapping("/users")
    List<UserDto> getAllUsers() {
        List<UserR> savedUsers = userRepository.findAll();
        return savedUsers.stream().map(user -> Mapper.userToUserDto(user)).collect(Collectors.toList());

    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Optional<UserR> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            UserR user = userOptional.get();
            UserDto response = Mapper.userToUserDto(user);

            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiError("User not found", "User with id " + id + " not found"));

    }

    @DeleteMapping("/users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }
}

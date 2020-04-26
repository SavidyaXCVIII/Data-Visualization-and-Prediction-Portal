package com.sdgp.backend.service;

import com.sdgp.backend.model.User;
import com.sdgp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User findUser(String email) {

        return userRepository.findByEmail(email);

    }

    public void saveUser(User user) {
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setFullName(user.getFullName());
        user.setCompanyName(user.getCompanyName());
        user.setPhone(user.getPhone());
        userRepository.save(user);
    }

}

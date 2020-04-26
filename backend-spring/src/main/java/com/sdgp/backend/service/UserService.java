package com.sdgp.backend.service;

import com.sdgp.backend.model.User;
import com.sdgp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findUser(String email) {

        return userRepository.findByEmail(email);

    }

}

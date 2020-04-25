package com.smartdiscover.impl;

import com.smartdiscover.model.User;
import com.smartdiscover.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smartdiscover.Registration;
import java.util.List;

@Service
public class RegistrationImpl implements Registration<String, User> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) throws Exception {
        user = userRepository.save(user);
        return user;
    }

    @Override
    public User getUser(String userId,String password) throws Exception {
        User user = userRepository.findOne(userId);
        return user;
    }

    public List<User> getAllUser() throws Exception {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public User updateUser(User user) throws Exception {
        user = userRepository.save(user);
        return user;
    }

    @Override
    public void deleteUser(String userId,String password) throws Exception {
        if (userId == null) {
            throw new Exception("user id is null");
        } else {
            userRepository.delete(userId);
        }
    }
}

package com.sdgp.backend.service;

import com.sdgp.backend.model.User;
import com.sdgp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public User save(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String email) {
        return userRepository.findOneByEmail(email);
    }

    /*public User find(Long id) {
        return userRepository.findOne(id);
    }*/

}

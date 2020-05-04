package com.sdgp.backend.service;

import com.sdgp.backend.model.User;
import com.sdgp.backend.model.UserMongo;
import com.sdgp.backend.repository.UserMongoCollectionRepository;
import com.sdgp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;

@Service
public class UserService {

    private static int idNum;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMongoCollectionRepository mongoCollectionRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public User findUser(String email) {
         return userRepository.findByEmail(email);
    }

    public void saveUser(User user) {
        user.setId(idNum);
        /*user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setFullName(user.getFullName());
        user.setCompanyName(user.getCompanyName());
        user.setPhone(user.getPhone());*/
        userRepository.save(user);
        //idNum++;

    }

    public void settingID(){

        if (!mongoTemplate.collectionExists("userMongo")){
            UserMongo mongoCollection = new UserMongo();
            String countString = String.valueOf(1);
            mongoCollection.setCount(countString);
            mongoCollection.setId(1);
            mongoCollectionRepository.save(mongoCollection);
        }

        UserMongo mongo = mongoCollectionRepository.findFirstById(1);
        idNum = Integer.parseInt(mongo.getCount());
        idNum++;
        String countString = String.valueOf(idNum);
        mongo.setCount(countString);
        mongoCollectionRepository.save(mongo);
    }

}

package com.sdgp.backend.repository;

import com.sdgp.backend.model.UserMongo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoCollectionRepository extends MongoRepository<UserMongo,String> {
    UserMongo findFirstById(int id);
}

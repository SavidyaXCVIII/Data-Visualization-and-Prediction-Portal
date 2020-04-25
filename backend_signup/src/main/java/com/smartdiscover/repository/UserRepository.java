package com.smartdiscover.repository;

import com.smartdiscover.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}

package com.sdgp.backend.repository;

import com.sdgp.backend.model.Mongo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoCollectionRepository extends MongoRepository<Mongo,String> {
    Mongo findFirstById(int id);
}

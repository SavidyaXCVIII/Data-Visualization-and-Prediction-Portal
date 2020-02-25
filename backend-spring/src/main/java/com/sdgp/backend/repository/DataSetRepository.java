package com.sdgp.backend.repository;

import com.sdgp.backend.model.DataSet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataSetRepository extends MongoRepository<DataSet,String> {
}

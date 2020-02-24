package com.sdgp.backend.repository;

import com.sdgp.backend.model.DataSet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DataSetRepository extends MongoRepository<DataSet,String> {
}

package com.sdgp.backend.service;

import com.google.gson.JsonObject;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.model.Mongo;
import com.sdgp.backend.repository.DataSetRepository;
import com.sdgp.backend.repository.MongoCollectionRepository;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;

@Component
public class FileService {

    @Autowired
    private DataSetRepository dataSetRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private MongoCollectionRepository mongoCollectionRepository;

    public void saveJson(JsonObject jsonObject) {
        System.out.println(jsonObject);
        mongoTemplate.save(jsonObject);
    }



    public void saveDataset(DataSet dataSet) {

        dataSetRepository.save(dataSet);

    }


    public List<DataSet> getDataSets() {
        List<DataSet> dataSets = new ArrayList<>();
        dataSets.addAll(dataSetRepository.findAll());
        return dataSets;
    }

    public void bytesToJson(byte[] bytes, String datasetName) throws IOException {
        ByteArrayInputStream inputFilestream = new ByteArrayInputStream(bytes);

//        creating a JsonObject of a dataset
        if (!mongoTemplate.collectionExists("mongo")){
            Mongo mongoCollection = new Mongo();
            String countString = String.valueOf(1);
            mongoCollection.setCount(countString);
            mongoCollection.setId(1);
            mongoCollectionRepository.save(mongoCollection);
        }

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputFilestream));
        String firstLine = bufferedReader.readLine();
        String[] arrayOfColumns = firstLine.split(",", -2);
        int numberOfColumns = arrayOfColumns.length;
        for (int i = 0; i < numberOfColumns; i++) {
            arrayOfColumns[i] = arrayOfColumns[i].replace(".", "");
        }

        Mongo mongo = mongoCollectionRepository.findFirstById(1);
        int number = Integer.parseInt(mongo.getCount());
        number++;
        String countString = String.valueOf(number);
        mongo.setCount(countString);
        mongoCollectionRepository.save(mongo);

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            Document object = new Document();
            for (int i = 0; i < numberOfColumns; i++) {
                String[] data = line.split(",", -2);
                object.append(arrayOfColumns[i], data[i]);
            }
            mongoTemplate.save(object,countString);
            System.out.println(line);
            System.out.println("inserted");

        }
    }

}

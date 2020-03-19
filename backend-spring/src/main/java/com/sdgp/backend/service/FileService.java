package com.sdgp.backend.service;

import com.google.gson.JsonObject;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.repository.DataSetRepository;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Component
public class FileService {

    @Autowired
    private DataSetRepository dataSetRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

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


        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputFilestream));
        String firstLine = bufferedReader.readLine();
        String[] arrayOfColumns = firstLine.split(",", -2);
        int numberOfColumns = arrayOfColumns.length;
        for (int i = 0; i < numberOfColumns; i++) {
            arrayOfColumns[i] = arrayOfColumns[i].replace(".", "");
        }

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            Document object = new Document();
            for (int i = 0; i < numberOfColumns; i++) {
                String[] data = line.split(",", -2);
                object.append(arrayOfColumns[i], data[i]);
            }
            mongoTemplate.save(object, datasetName);
            System.out.println(line);
            System.out.println("inserted");
        }
    }

}

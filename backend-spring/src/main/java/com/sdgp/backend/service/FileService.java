package com.sdgp.backend.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.mongodb.DBCollection;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;
import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.repository.DataSetRepository;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.crypto.Data;
import javax.xml.ws.Response;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class FileService {

    @Autowired
    private DataSetRepository dataSetRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public  void saveJson(JsonObject jsonObject) {
        System.out.println(jsonObject);
        mongoTemplate.save(jsonObject);
    }






    public void saveDataset(DataSet dataSet) {

        byte[] bytes = dataSet.getDataFile();


    }


    public List<DataSet> getDataSets() {
        List<DataSet> dataSets = new ArrayList<>();
        dataSets.addAll(dataSetRepository.findAll());
        return dataSets;
    }

    public void bytesToJson(byte[] bytes) throws IOException {
        ByteArrayInputStream inputFilestream = new ByteArrayInputStream(bytes);

//        creating a JsonObject of a dataset


        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputFilestream ));
        String firstLine = bufferedReader.readLine();
        String[] arrayOfColumns = firstLine.split(",", -2);
        int numberOfColumns = arrayOfColumns.length;
        for (int i = 0; i < numberOfColumns; i++) {
            arrayOfColumns[i] = arrayOfColumns[i].replace(".", "");
        }

        while ((bufferedReader.readLine()) != null){
            String line = bufferedReader.readLine();
            Document object = new Document();
            for (int i = 0; i < numberOfColumns; i++) {
                System.out.println(line);
                String[] data = line.split(",", -2);
                object.append(arrayOfColumns[i],data[i]);
            }
            DBCollection collection = null;
            mongoTemplate.save(object, "hello");
            System.out.println("inserted");
        }
    }

    public void save() {
        Document student = new Document();
        student.append("name", "savidya") ;
        mongoTemplate.save(student,"hello");
    }
}

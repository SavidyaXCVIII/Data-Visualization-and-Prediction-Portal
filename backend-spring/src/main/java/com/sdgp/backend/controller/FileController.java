package com.sdgp.backend.controller;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.service.FileService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class FileController {

    private static String UPLOADED_FOLDER = "F://temp//";

    private static String datasetId;

    public static byte[] bytes;

    @Autowired
    private FileService fileService;

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/files")
    public List<DataSet> getAllDataSets() {
        return fileService.getDataSets();
    }

    @GetMapping("/filesArray")
    public List<Document> getDataset(@RequestParam int id) {

        List<Document> dataSets = new ArrayList<>();
        MongoCollection<Document> collection = mongoTemplate.getCollection(String.valueOf(id));
        MongoCursor<Document> cursor = collection.find().iterator();
        try {
            while (cursor.hasNext()) {
                dataSets.add(cursor.next());
            }
        } finally {
            cursor.close();
        }
        return dataSets;
    }


    @PostMapping("/files")
    ResponseEntity<ResponseDTO> saveDataset(@RequestParam("file") MultipartFile dataFile,
                                            @RequestParam String datasetName,
                                            @RequestParam String publisher,
                                            @RequestParam String year,
                                            @RequestParam String releasedDate,
                                            @RequestParam String category,
                                            @RequestParam String description) {

        try {
//            byte[] bytes = dataFile.getBytes();
//            Path path = Paths.get(UPLOADED_FOLDER + dataFile.getOriginalFilename());
//            System.out.println(path.toAbsolutePath());
//            Files.write(path, bytes);
            bytes = dataFile.getBytes();
            fileService.bytesToJson(bytes, datasetName);
            ByteArrayInputStream inputFilestream = new ByteArrayInputStream(bytes);
            BufferedReader br = new BufferedReader(new InputStreamReader(inputFilestream));
            DataSet dataSet = new DataSet();
            dataSet.setDatasetName(datasetName);
            dataSet.setPublisher(publisher);
            dataSet.setYear(year);
            dataSet.setReleasedDate(releasedDate);
            dataSet.setCategory(category);
            dataSet.setDescription(description);
            dataSet.setDataFile(bytes);
            fileService.saveDataset(dataSet);
            System.out.println(dataSet);


        } catch (IOException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(new ResponseDTO<>(Boolean.TRUE, "Name : " + dataFile.getName() + ",Size :" + dataFile.getSize() + ", ContentType : " + dataFile.getContentType()));
    }
}

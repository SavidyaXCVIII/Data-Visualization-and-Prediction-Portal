package com.sdgp.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Arrays;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document("Datasets")
@TypeAlias("Dataset")
public class DataSet {
    @Id
    private int id;
    private String datasetName;
    private String publisher;
    private String year;
    private String releasedDate;
    private String category;
    private String description;
    private byte[] dataFile;

    @Override
    public String toString() {
        return "DataSet{" +
                "id='" + id + '\'' +
                ", datasetName='" + datasetName + '\'' +
                ", publisher='" + publisher + '\'' +
                ", year='" + year + '\'' +
                ", releasedDate='" + releasedDate + '\'' +
                ", category='" + category + '\'' +
                ", description='" + description + '\'' +
                ", dataFile=" + Arrays.toString(dataFile) +
                '}';
    }
}

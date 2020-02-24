package com.sdgp.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document("Datasets")
@TypeAlias("Dataset")
public class DataSet {
    @Id
    private String id;
    private String datasetName;
    private String publisher;
    private LocalDate year;
    private LocalDate releasedDate;
    private String category;
    private String description;


}

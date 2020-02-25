package com.sdgp.backend.service;

import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.repository.DataSetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.crypto.Data;
import javax.xml.ws.Response;
import java.io.IOException;

@Component
public class FileService {

    @Autowired
    private DataSetRepository dataSetRepository;

    public void saveDataset(DataSet dataSet) {

        dataSetRepository.save(dataSet);


    }




}

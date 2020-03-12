package com.sdgp.backend.controller;
import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.DataSet;
import com.sdgp.backend.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class FileController {

	public static byte[] bytes;

	@Autowired
	private FileService fileService;

	@GetMapping("/files")
	public List<DataSet> getAllDataSets() {
		fileService.save();
	    return fileService.getDataSets();
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


//            InputStream inputStream = dataFile.getInputStream();
//            int data = inputStream.read();
//            System.out.println(data);
			bytes = dataFile.getBytes();
			fileService.bytesToJson(bytes);
			ByteArrayInputStream inputFilestream = new ByteArrayInputStream(bytes);
			BufferedReader br = new BufferedReader(new InputStreamReader(inputFilestream ));
//			String line = "";
//			line = br.readLine();
//			String[] arrOfStr = line.split(",", -2);
//			for (String column :
//					arrOfStr) {
//				System.out.println(column);
//			}
//			while ((line = br.readLine()) != null) {
//				System.out.println(line);
//			}


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


        } catch (IOException e)  {
            e.printStackTrace();
        }

        return ResponseEntity.ok(new ResponseDTO<>(Boolean.FALSE, "Name : " + dataFile.getName() + ",Size :" + dataFile.getSize() + ", ContentType : " + dataFile.getContentType()));
    }
}

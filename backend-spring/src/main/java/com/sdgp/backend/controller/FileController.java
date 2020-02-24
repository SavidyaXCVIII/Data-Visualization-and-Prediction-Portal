package com.sdgp.backend.controller;

import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.DataSet;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*")
public class FileController {

	public static byte[] bytes;

	@GetMapping("/files")
	public String getDataset(){
		return new String(bytes, StandardCharsets.UTF_8);
	}


    @PostMapping("/files")
    ResponseEntity<ResponseDTO> saveFile(@RequestParam("file") MultipartFile dataFile,
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
			ByteArrayInputStream inputFilestream = new ByteArrayInputStream(bytes);
			BufferedReader br = new BufferedReader(new InputStreamReader(inputFilestream ));
			String line = "";
			while ((line = br.readLine()) != null) {
				System.out.println(line);
			}
			br.close();
			System.out.println(publisher);
			System.out.println(datasetName);
			System.out.println(year);
			System.out.println(releasedDate);
			System.out.println(category);
			System.out.println(description);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(new ResponseDTO<>(Boolean.FALSE, "Name : " + dataFile.getName() + ",Size :" + dataFile.getSize() + ", ContentType : " + dataFile.getContentType()));
    }
}

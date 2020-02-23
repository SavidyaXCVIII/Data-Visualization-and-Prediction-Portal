package com.sdgp.backend.controller;

import com.sdgp.backend.dto.ResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Controller
public class FileController implements IFileController
{
	@Override
	public ResponseEntity<ResponseDTO> saveFile( MultipartFile dataFile )
	{

		try
		{
			InputStream inputStream = dataFile.getInputStream();
			int data = inputStream.read();

		}
		catch ( IOException e )
		{
			e.printStackTrace();
		}

		return ResponseEntity.ok( new ResponseDTO<>( Boolean.FALSE, "Name : " + dataFile.getName() + ",Size :" + dataFile.getSize() + ", ContentType : " + dataFile.getContentType() ) );
	}
}

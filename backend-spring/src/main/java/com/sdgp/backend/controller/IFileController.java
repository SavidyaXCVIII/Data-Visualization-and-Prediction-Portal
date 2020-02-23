package com.sdgp.backend.controller;

import com.sdgp.backend.dto.ResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping("files")
public interface IFileController
{
	@PostMapping("/")
	ResponseEntity<ResponseDTO> saveFile(@RequestParam("file") MultipartFile dataFile);
}

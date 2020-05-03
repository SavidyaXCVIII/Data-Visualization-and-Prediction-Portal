package com.sdgp.backend.controller;

import com.sdgp.backend.dto.ResponseDTO;
import com.sdgp.backend.model.User;
import com.sdgp.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public User getAllDataSets(@RequestParam String mail) {
        return userService.findUser(mail);
    }

    @PostMapping("/signup")
    ResponseEntity<ResponseDTO> saveDataset(@RequestParam String email,
                                            @RequestParam String fullName,
                                            @RequestParam String password,
                                            @RequestParam String company,
                                            @RequestParam int phone) {

        userService.settingID();
        User user = new User();
        user.setEmail(email);
        user.setFullName(fullName);
        user.setPassword(password);
        user.setCompanyName(company);
        user.setPhone(phone);
        userService.saveUser(user);
        System.out.println(user);

        return ResponseEntity.ok(new ResponseDTO<>(Boolean.TRUE,"Successful"));
    }

}

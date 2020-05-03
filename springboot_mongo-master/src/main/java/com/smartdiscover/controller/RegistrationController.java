package com.smartdiscover.controller;

import com.smartdiscover.impl.RegistrationImpl;
import com.smartdiscover.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.List;


@RestController
@CrossOrigin
public class RegistrationController {

    @Autowired
    private RegistrationImpl registrationImpl;

    @PostMapping(path = "/registerUser")
    public ResponseEntity registerUser(@RequestBody User user) throws Exception {
        HashMap<String, Object> resp = new HashMap<>();
        try {
            registrationImpl.registerUser(user);
        } catch (ConstraintViolationException e) {
            HashMap<String, String> messages = new HashMap<>();
            e.getConstraintViolations().stream().forEach(constraintViolation -> {
                messages.put(
                        constraintViolation.getPropertyPath().toString(),
                        constraintViolation.getMessage());
            });
            resp.put("error", true);
            resp.put("messages", messages);
        }
        resp.put("user", user);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @GetMapping("/getUser" )
    public ResponseEntity getUser(@RequestParam("username") String username,@RequestParam("password") String password) throws Exception {
        User user = registrationImpl.getUser(username,password);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/getAllUser" )
    public ResponseEntity getAllUser() throws Exception {
        List<User> users = registrationImpl.getAllUser();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping(path = "/updateUser")
    public ResponseEntity updateUser(@RequestParam("username") String username, @RequestBody User user) throws Exception {
        HashMap<String, Object> resp = new HashMap<>();
        registrationImpl.updateUser(user);
        resp.put("user", user);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @DeleteMapping("/deleteUser" )
    public ResponseEntity deleteUser(@RequestParam("username") String username,@RequestParam("password") String password) throws Exception {
        registrationImpl.deleteUser(username,password);
        HashMap<String,String> resp = new HashMap<>();
        resp.put("message", "User is deleted successfully.");
        return new ResponseEntity<>(resp,HttpStatus.OK);
    }
}

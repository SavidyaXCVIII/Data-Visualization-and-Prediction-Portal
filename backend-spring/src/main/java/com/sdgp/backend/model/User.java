package com.sdgp.backend.model;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private String userName;
    private String password;

    @Override
    public String toString() {
        return "Login{" +
                "name='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

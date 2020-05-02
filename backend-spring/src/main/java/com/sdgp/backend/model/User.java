package com.sdgp.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@Document("Users")
@TypeAlias("Users")
public class User {
    @Id
    private int id;
    private String email;
    private String password;
    private String fullName;
    private String companyName;
    private int phone;

    public User() {
    }

    public User(String email, String password, String fullName, String companyName, int phone) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.companyName = companyName;
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", fullName='" + fullName + '\'' +
                ", companyName='" + companyName + '\'' +
                ", phone=" + phone +
                '}';
    }
}

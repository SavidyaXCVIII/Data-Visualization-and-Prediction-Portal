package com.smartdiscover;


public interface Registration<ID, USER> {


    USER registerUser(USER user) throws Exception;

    USER getUser(ID userId,ID password) throws Exception;

    USER updateUser(USER user) throws Exception;

    void deleteUser(ID userId,ID password) throws Exception;

}

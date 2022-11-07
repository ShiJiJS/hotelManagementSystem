package com.htmgmt;

import com.htmgmt.mapper.UserMapper;
import com.htmgmt.pojo.User;
import com.htmgmt.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class HotelManagementApplicationTests {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Test
    public void userServiceTest(){
        List<User> users = userService.selectAll();
        System.out.println(users);
    }

    @Test
    public void userMapperTest(){
        List<User> users = userMapper.selectAll();
        System.out.println(users);
    }
}

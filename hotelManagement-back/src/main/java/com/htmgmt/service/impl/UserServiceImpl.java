package com.htmgmt.service.impl;

import com.htmgmt.mapper.UserMapper;
import com.htmgmt.pojo.User;
import com.htmgmt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean save(User user) {
        userMapper.save(user);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        userMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(User user) {
        userMapper.update(user);
        return true;
    }

    @Override
    public List<User> selectAll() {
        return userMapper.selectAll();
    }

    @Override
    public User selectById(Integer id) {
        return userMapper.selectById(id);
    }
    
    @Override
    public User selectByUserName(String userName) {
        return userMapper.selectByUserName(userName);
    }

    @Override
    public List<User> selectByFields(User user) {
        return userMapper.selectByFields(user);
    }
}

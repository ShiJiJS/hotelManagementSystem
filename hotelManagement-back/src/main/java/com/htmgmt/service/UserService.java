package com.htmgmt.service;

import com.htmgmt.pojo.User;
import com.htmgmt.pojo.Vips;

import javax.jws.soap.SOAPBinding;
import java.util.List;

public interface UserService {
    public boolean save(User user);
    public boolean delete(Integer[] ids);
    public boolean update(User user);
    public List<User> selectAll();
    public User selectById(Integer id);
    public User selectByUserName(String userName);
    public List<User> selectByFields(User user);
}

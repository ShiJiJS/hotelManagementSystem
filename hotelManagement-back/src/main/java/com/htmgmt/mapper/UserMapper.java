package com.htmgmt.mapper;

import com.htmgmt.pojo.User;
import com.htmgmt.pojo.Vips;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import javax.jws.soap.SOAPBinding;
import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    public void save(User user);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(User user);

    public List<User> selectAll();

    public User selectById(Integer id);

    public User selectByUserName(String userName);

    public List<User> selectByFields(User user);
}

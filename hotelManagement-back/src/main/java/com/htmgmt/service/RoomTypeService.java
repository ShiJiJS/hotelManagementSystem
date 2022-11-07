package com.htmgmt.service;

import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;

import java.util.List;

public interface RoomTypeService {
    public boolean save(RoomType roomType);
    public boolean delete(Integer[] ids);
    public boolean update(RoomType roomType);
    public List<RoomType> selectAll();
    public RoomType selectById(Integer id);
    public List<RoomType> selectByFields(RoomType roomType);
}

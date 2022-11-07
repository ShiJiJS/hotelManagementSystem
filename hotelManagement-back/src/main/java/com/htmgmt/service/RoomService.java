package com.htmgmt.service;

import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;

import java.util.List;

public interface RoomService {
    public boolean save(Room room);
    public boolean delete(Integer[] ids);
    public boolean update(Room room);
    public List<Room> selectAll();
    public Room selectById(Integer id);
    public List<Room> selectByFields(Room room);
}

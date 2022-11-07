package com.htmgmt.service;

import com.htmgmt.pojo.Floor;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;

import java.util.List;

public interface FloorService {
    public boolean save(Floor floor);
    public boolean delete(Integer[] ids);
    public boolean update(Floor floor);
    public List<Floor> selectAll();
    public Floor selectById(Integer id);
    public List<Floor> selectByFields(Floor floor);
}

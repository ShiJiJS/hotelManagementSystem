package com.htmgmt.service.impl;

import com.htmgmt.mapper.RoomMapper;
import com.htmgmt.pojo.Room;
import com.htmgmt.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomMapper roomMapper;

    @Override
    public boolean save(Room room) {
        roomMapper.save(room);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        roomMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Room room) {
        roomMapper.update(room);
        return true;
    }

    @Override
    public List<Room> selectAll() {
        return roomMapper.selectAll();
    }

    @Override
    public Room selectById(Integer id) {
        return roomMapper.selectById(id);
    }

    @Override
    public List<Room> selectByFields(Room room) {
        return roomMapper.selectByFields(room);
    }
}

package com.htmgmt.service.impl;

import com.htmgmt.mapper.RoomTypeMapper;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;
import com.htmgmt.service.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomTypeServiceImpl implements RoomTypeService {

    @Autowired
    private RoomTypeMapper roomTypeMapper;

    @Override
    public boolean save(RoomType roomType) {
        roomTypeMapper.save(roomType);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        roomTypeMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(RoomType roomType) {
        roomTypeMapper.update(roomType);
        return true;
    }

    @Override
    public List<RoomType> selectAll() {
        return roomTypeMapper.selectAll();
    }

    @Override
    public RoomType selectById(Integer id) {
        return roomTypeMapper.selectById(id);
    }

    @Override
    public List<RoomType> selectByFields(RoomType roomType) {
        return roomTypeMapper.selectByFields(roomType);
    }
}

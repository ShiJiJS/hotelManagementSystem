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
    public List<Room> selectAll(Integer page,Integer size) {
        Integer start = (page-1) * size;
        return roomMapper.selectAll(start,size);
    }

    @Override
    public Room selectById(Integer id) {
        return roomMapper.selectById(id);
    }

    @Override
    public List<Room> selectByFields(Room room) {
        return roomMapper.selectByFields(room);
    }

    @Override
    public Integer totalPages(Integer size) {
        Integer total = roomMapper.totalPages(size);
        if(total  % size != 0){
            return total / size + 1;
        }else {
            return total / size;
        }
    }

    @Override
    public List<Room> selectAllWithOutPages() {
        return roomMapper.selectAllWithOutPages();
    }
}

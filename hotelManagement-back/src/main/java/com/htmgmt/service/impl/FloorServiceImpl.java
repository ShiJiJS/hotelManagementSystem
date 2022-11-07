package com.htmgmt.service.impl;

import com.htmgmt.mapper.FloorMapper;
import com.htmgmt.pojo.Floor;
import com.htmgmt.service.FloorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FloorServiceImpl implements FloorService {

    @Autowired
    private FloorMapper floorMapper;

    @Override
    public boolean save(Floor floor) {
        floorMapper.save(floor);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        floorMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Floor floor) {
        floorMapper.update(floor);
        return true;
    }

    @Override
    public List<Floor> selectAll() {
        return floorMapper.selectAll();
    }

    @Override
    public Floor selectById(Integer id) {
        return floorMapper.selectById(id);
    }

    @Override
    public List<Floor> selectByFields(Floor floor) {
        return floorMapper.selectByFields(floor);
    }
}

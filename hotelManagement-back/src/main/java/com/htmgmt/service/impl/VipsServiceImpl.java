package com.htmgmt.service.impl;

import com.htmgmt.mapper.VipsMapper;
import com.htmgmt.pojo.Vips;
import com.htmgmt.service.VipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VipsServiceImpl implements VipsService {
    @Autowired
    private VipsMapper vipsMapper;

    @Override
    public boolean save(Vips vips) {
        vipsMapper.save(vips);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        vipsMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Vips vips) {
        vipsMapper.update(vips);
        return true;
    }

    @Override
    public List<Vips> selectAll() {
        return vipsMapper.selectAll();
    }

    @Override
    public Vips selectById(Integer id) { return vipsMapper.selectById(id); }


    @Override
    public List<Vips> selectByName(String name) {
        Vips vips = new Vips();
        vips.setName(name);
        return vipsMapper.selectByFields(vips);
    }

    @Override
    public List<Vips> selectByFields(Vips vips) { return vipsMapper.selectByFields(vips); }
}

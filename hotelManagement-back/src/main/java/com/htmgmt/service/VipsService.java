package com.htmgmt.service;

import com.htmgmt.pojo.Vips;

import java.util.List;

public interface VipsService {
    public boolean save(Vips vips);

    public boolean delete(Integer[] ids);

    public boolean update(Vips vips);

    public List<Vips> selectAll();

    public Vips selectById(Integer id);

    public List<Vips> selectByName(String name);

    public List<Vips> selectByFields(Vips vips);
}
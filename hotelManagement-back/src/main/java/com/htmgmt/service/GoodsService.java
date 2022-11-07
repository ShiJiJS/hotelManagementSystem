package com.htmgmt.service;

import com.htmgmt.pojo.Floor;
import com.htmgmt.pojo.Goods;

import java.util.List;

public interface GoodsService {
    public boolean save(Goods goods);

    public boolean delete(Integer[] ids);

    public boolean update(Goods goods);

    public List<Goods> selectAll();

    public Goods selectById(Integer id);

    public List<Goods> selectByFields(Goods goods);
}
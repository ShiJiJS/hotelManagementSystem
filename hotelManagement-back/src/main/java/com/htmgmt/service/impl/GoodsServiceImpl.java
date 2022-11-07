package com.htmgmt.service.impl;

import com.htmgmt.mapper.GoodsMapper;
import com.htmgmt.pojo.Goods;
import com.htmgmt.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {
    @Autowired
    private GoodsMapper goodsMapper;

    @Override
    public boolean save(Goods goods) {
        goodsMapper.save(goods);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        goodsMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Goods goods) {
        goodsMapper.update(goods);
        return true;
    }

    @Override
    public List<Goods> selectAll() {
        return goodsMapper.selectAll();
    }

    @Override
    public Goods selectById(Integer id) {
        return goodsMapper.selectById(id);
    }

    @Override
    public List<Goods> selectByFields(Goods goods) {
        return goodsMapper.selectByFields(goods);
    }
}

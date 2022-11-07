package com.htmgmt.service.impl;

import com.htmgmt.mapper.GoodsTypesMapper;
import com.htmgmt.pojo.GoodsTypes;
import com.htmgmt.service.GoodsTypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsTypesServiceImpl implements GoodsTypesService {
    @Autowired
    private GoodsTypesMapper goodsTypesMapper;

    @Override
    public boolean save(GoodsTypes goodsTypes) {
        goodsTypesMapper.save(goodsTypes);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        goodsTypesMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(GoodsTypes goodsTypes) {
        goodsTypesMapper.update(goodsTypes);
        return true;
    }

    @Override
    public List<GoodsTypes> selectAll() {
        return goodsTypesMapper.selectAll();
    }

    @Override
    public GoodsTypes selectById(Integer id) {
        return goodsTypesMapper.selectById(id);
    }

    @Override
    public List<GoodsTypes> selectByFields(GoodsTypes goodsTypes) {
        return goodsTypesMapper.selectByFields(goodsTypes);
    }
}

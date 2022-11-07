package com.htmgmt.service;

import com.htmgmt.pojo.Goods;
import com.htmgmt.pojo.GoodsTypes;

import java.util.List;

public interface GoodsTypesService {
    public boolean save(GoodsTypes goodsTypes);
    public boolean delete(Integer[] ids);
    public boolean update(GoodsTypes goodsTypes);
    public List<GoodsTypes> selectAll();
    public GoodsTypes selectById(Integer id);
    public List<GoodsTypes> selectByFields(GoodsTypes goodsTypes);
}

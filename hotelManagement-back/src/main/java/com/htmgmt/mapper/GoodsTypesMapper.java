package com.htmgmt.mapper;

import com.htmgmt.pojo.Goods;
import com.htmgmt.pojo.GoodsTypes;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface GoodsTypesMapper {
    public void save(GoodsTypes goodsTypes);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(GoodsTypes goodsTypes);

    public List<GoodsTypes> selectAll();

    public GoodsTypes selectById(Integer id);

    public List<GoodsTypes> selectByFields(GoodsTypes goodsTypes);
}

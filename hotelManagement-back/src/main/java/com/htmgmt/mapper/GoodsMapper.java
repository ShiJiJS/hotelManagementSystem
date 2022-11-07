package com.htmgmt.mapper;

import com.htmgmt.pojo.Floor;
import com.htmgmt.pojo.Goods;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface GoodsMapper {
    public void save(Goods goods);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Goods goods);

    public List<Goods> selectAll();

    public Goods selectById(Integer id);

    public List<Goods> selectByFields(Goods goods);
}
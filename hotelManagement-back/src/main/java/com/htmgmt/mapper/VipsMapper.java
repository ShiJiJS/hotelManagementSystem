package com.htmgmt.mapper;

import com.htmgmt.pojo.Vips;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface VipsMapper {
    public void save(Vips vips);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Vips vips);

    public List<Vips> selectAll();

    public Vips selectById(Integer id);

    public List<Vips> selectByFields(Vips vips);
}
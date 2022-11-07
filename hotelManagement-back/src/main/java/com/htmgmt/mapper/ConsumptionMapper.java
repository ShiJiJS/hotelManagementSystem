package com.htmgmt.mapper;

import com.htmgmt.pojo.Consumption;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ConsumptionMapper {
    public void save(Consumption consumption);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Consumption consumption);

    public List<Consumption> selectAll();

    public Consumption selectById(Integer id);

    public List<Consumption> selectByFields(Consumption consumption);
}

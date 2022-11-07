package com.htmgmt.mapper;

import com.htmgmt.pojo.ConsumptionDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ConsumptionDetailMapper {
    public void save(ConsumptionDetail consumptionDetail);

    public void deleteByIds(@Param("ids") Integer[] ids);
    
    public void deleteByConsumptionId(@Param("consumptionIds") Integer[] consumptionIds);

    public void update(ConsumptionDetail consumptionDetail);

    public List<ConsumptionDetail> selectAll();

    public ConsumptionDetail selectById(Integer id);

    public List<ConsumptionDetail> selectByFields(ConsumptionDetail consumptionDetail);
}

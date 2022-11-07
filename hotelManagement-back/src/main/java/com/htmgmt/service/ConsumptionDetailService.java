package com.htmgmt.service;

import java.util.List;

import com.htmgmt.pojo.ConsumptionDetail;

public interface ConsumptionDetailService {
    public boolean save(ConsumptionDetail consumptionDetail);
    public boolean delete(Integer[] ids);
    public boolean deleteByConsumptionId(Integer[] consumptionIds);
    public boolean update(ConsumptionDetail consumptionDetail);
    public List<ConsumptionDetail> selectAll();
    public ConsumptionDetail selectById(Integer id);
    public List<ConsumptionDetail> selectByFields(ConsumptionDetail consumptionDetail);
}

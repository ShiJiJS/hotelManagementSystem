package com.htmgmt.service.impl;

import com.htmgmt.mapper.ConsumptionMapper;
import com.htmgmt.pojo.Consumption;
import com.htmgmt.service.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsumptionServiceImpl implements ConsumptionService {
    @Autowired
    private ConsumptionMapper consumptionMapper;

    @Override
    public boolean save(Consumption consumption) {
        consumptionMapper.save(consumption);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        consumptionMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Consumption consumption) {
        consumptionMapper.update(consumption);
        return true;
    }

    @Override
    public List<Consumption> selectAll() {
        return consumptionMapper.selectAll();
    }

    @Override
    public Consumption selectById(Integer id) {
        return consumptionMapper.selectById(id);
    }

    @Override
    public List<Consumption> selectByFields(Consumption consumption) {
        return consumptionMapper.selectByFields(consumption);
    }
}

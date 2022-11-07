package com.htmgmt.service.impl;

import com.htmgmt.mapper.ConsumptionDetailMapper;
import com.htmgmt.pojo.ConsumptionDetail;
import com.htmgmt.service.ConsumptionDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsumptionDetailServiceImpl implements ConsumptionDetailService{

    @Autowired
    private ConsumptionDetailMapper consumptionDetailMapper;

    @Override
    public boolean save(ConsumptionDetail consumptionDetail) {
        consumptionDetailMapper.save(consumptionDetail);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        consumptionDetailMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean deleteByConsumptionId(Integer[] consumptionIds) {
        consumptionDetailMapper.deleteByConsumptionId(consumptionIds);
        return true;
    }
    
    @Override
    public boolean update(ConsumptionDetail consumptionDetail) {
        consumptionDetailMapper.update(consumptionDetail);
        return true;
    }

    @Override
    public List<ConsumptionDetail> selectAll() {
        return consumptionDetailMapper.selectAll();
    }

    @Override
    public ConsumptionDetail selectById(Integer id) {
        return consumptionDetailMapper.selectById(id);
    }

    @Override
    public List<ConsumptionDetail> selectByFields(ConsumptionDetail consumptionDetail) {
        return consumptionDetailMapper.selectByFields(consumptionDetail);
    }
}

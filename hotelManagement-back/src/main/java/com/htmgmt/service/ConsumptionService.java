package com.htmgmt.service;

import com.htmgmt.pojo.Consumption;

import java.util.List;

public interface ConsumptionService {
    public boolean save(Consumption consumption);
    public boolean delete(Integer[] ids);
    public boolean update(Consumption consumption);
    public List<Consumption> selectAll();
    public Consumption selectById(Integer id);
    public List<Consumption> selectByFields(Consumption consumption);
}

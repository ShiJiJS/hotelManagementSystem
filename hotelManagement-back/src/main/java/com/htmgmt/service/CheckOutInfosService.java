package com.htmgmt.service;

import com.htmgmt.pojo.CheckOutInfos;

import java.math.BigDecimal;
import java.util.List;

public interface CheckOutInfosService {
    public boolean save(CheckOutInfos checkOutInfos);

    public boolean delete(Integer[] ids);

    public boolean update(CheckOutInfos checkOutInfos);

    public List<CheckOutInfos> selectAll();

    public CheckOutInfos selectById(Integer id);

    public List<CheckOutInfos> selectByFields(CheckOutInfos checkOutInfos);
    public BigDecimal aggregate(CheckOutInfos checkOutInfos);
}
package com.htmgmt.service;

import com.htmgmt.pojo.CheckInInfos;

import java.util.List;

public interface CheckInInfosService {
    public boolean save(CheckInInfos checkInInfos);
    public boolean reservedSave(CheckInInfos checkInInfos);
    public void modify(CheckInInfos checkInInfos, CheckInInfos modify);
    public boolean delete(Integer[] ids);

    public boolean update(CheckInInfos checkInInfos);

    public List<CheckInInfos> selectAll();

    public CheckInInfos selectById(Integer id);

    public List<CheckInInfos> selectByFields(CheckInInfos checkInInfos);
}
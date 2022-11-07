package com.htmgmt.service;

import com.htmgmt.pojo.RoomChangeInfos;

import java.util.List;

public interface RoomChangeInfosService {
    public boolean save(RoomChangeInfos roomChangeInfos);

    public boolean delete(Integer[] ids);

    public boolean update(RoomChangeInfos roomChangeInfos);

    public List<RoomChangeInfos> selectAll();

    public RoomChangeInfos selectById(Integer id);

    public List<RoomChangeInfos> selectByFields(RoomChangeInfos roomChangeInfos);
}
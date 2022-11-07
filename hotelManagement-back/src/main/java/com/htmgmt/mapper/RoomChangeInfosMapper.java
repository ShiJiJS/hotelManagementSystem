package com.htmgmt.mapper;

import com.htmgmt.pojo.RoomChangeInfos;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoomChangeInfosMapper {
    public void save(RoomChangeInfos roomChangeInfos);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(RoomChangeInfos roomChangeInfos);

    public List<RoomChangeInfos> selectAll();

    public RoomChangeInfos selectById(Integer id);

    public List<RoomChangeInfos> selectByFields(RoomChangeInfos roomChangeInfos);
}
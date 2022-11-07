package com.htmgmt.mapper;

import com.htmgmt.pojo.CheckInInfos;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CheckInInfosMapper {
    public void save(CheckInInfos checkInInfos);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(CheckInInfos checkInInfos);

    public List<CheckInInfos> selectAll();

    public CheckInInfos selectById(Integer id);

    public List<CheckInInfos> selectByFields(CheckInInfos checkInInfos);
}
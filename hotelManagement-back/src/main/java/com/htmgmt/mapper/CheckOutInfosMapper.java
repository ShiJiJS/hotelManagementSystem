package com.htmgmt.mapper;

import com.htmgmt.pojo.CheckOutInfos;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CheckOutInfosMapper {
    public void save(CheckOutInfos checkOutInfos);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(CheckOutInfos checkOutInfos);

    public List<CheckOutInfos> selectAll();

    public CheckOutInfos selectById(Integer id);

    public List<CheckOutInfos> selectByFields(CheckOutInfos checkOutInfos);
}
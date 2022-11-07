package com.htmgmt.mapper;

import com.htmgmt.pojo.Floor;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface FloorMapper {
    public void save(Floor floor);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Floor floor);

    public List<Floor> selectAll();

    public Floor selectById(Integer id);

    public List<Floor> selectByFields(Floor floor);
}

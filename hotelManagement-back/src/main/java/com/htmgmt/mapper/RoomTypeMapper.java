package com.htmgmt.mapper;

import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoomTypeMapper {
    public void save(RoomType roomType);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(RoomType roomType);

    public List<RoomType> selectAll();

    public RoomType selectById(Integer id);

    public List<RoomType> selectByFields(RoomType roomType);
}

package com.htmgmt.mapper;

import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoomMapper {
    public void save(Room room);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Room room);

    public List<Room> selectAll();

    public Room selectById(Integer id);

    public List<Room> selectByFields(Room room);
}

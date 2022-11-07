package com.htmgmt.mapper;

import com.htmgmt.pojo.Reservations;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReservationsMapper {
    public void save(Reservations reservations);

    public void deleteByIds(@Param("ids") Integer[] ids);

    public void update(Reservations reservations);

    public List<Reservations> selectAll();

    public Reservations selectById(Integer id);

    public List<Reservations> selectByFields(Reservations reservations);
}
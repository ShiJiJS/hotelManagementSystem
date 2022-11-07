package com.htmgmt.service;

import com.htmgmt.pojo.Reservations;

import java.util.List;

public interface ReservationsService {
    public boolean save(Reservations reservations);

    public boolean delete(Integer[] ids);

    public boolean update(Reservations reservations);

    public List<Reservations> selectAll();

    public Reservations selectById(Integer id);

    public List<Reservations> selectByFields(Reservations reservations);
}
package com.htmgmt.controller;

import com.htmgmt.pojo.Reservations;
import com.htmgmt.service.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationsController {
    @Autowired
    private ReservationsService reservationsService;

    @GetMapping
    public Result selectAll(){
        List<Reservations> reservations = reservationsService.selectAll();
        return new Result(reservations,Code.GET_OK,"");
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Reservations reservations = reservationsService.selectById(id);
        Integer code = reservations != null?Code.GET_OK:Code.GET_ERR;
        String msg = reservations != null?"":"查询失败";
        return new Result(reservations,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody Reservations reservations){
        boolean flag = reservationsService.save(reservations);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Reservations reservations){
        List<Reservations> reservationsList = reservationsService.selectByFields(reservations);
        Integer code = reservationsList != null?Code.GET_OK:Code.GET_ERR;
        String msg = reservationsList != null?"":"查询失败";
        return new Result(reservationsList,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = reservationsService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody Reservations reservations){
        boolean flag = reservationsService.update(reservations);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

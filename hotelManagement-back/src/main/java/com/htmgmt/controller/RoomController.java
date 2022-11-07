package com.htmgmt.controller;


import com.htmgmt.pojo.Room;
import com.htmgmt.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping
    public Result save(@RequestBody Room room){
        boolean flag = roomService.save(room);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = roomService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @GetMapping
    public Result selectAll(){
        List<Room> roomList = roomService.selectAll();
        Integer code = roomList != null?Code.GET_OK:Code.GET_ERR;
        String msg = roomList != null?"":"查询失败";
        return new Result(roomList,code,msg);
    }

    @PutMapping
    public Result update(@RequestBody Room room){
        boolean flag = roomService.update(room);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Room room = roomService.selectById(id);
        Integer code = room != null?Code.GET_OK:Code.GET_ERR;
        String msg = room != null?"":"查询失败";
        return new Result(room,code,msg);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Room room){
        List<Room> rooms = roomService.selectByFields(room);
        Integer code = rooms != null?Code.GET_OK:Code.GET_ERR;
        String msg = rooms != null?"":"查询失败";
        return new Result(rooms,code,msg);
    }

}

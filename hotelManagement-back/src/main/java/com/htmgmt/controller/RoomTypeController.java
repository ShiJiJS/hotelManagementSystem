package com.htmgmt.controller;

import com.htmgmt.pojo.RoomType;
import com.htmgmt.service.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roomTypes")
public class RoomTypeController {

    @Autowired
    private RoomTypeService roomTypeService;

    @GetMapping
    public Result selectAll(){
        List<RoomType> roomTypes = roomTypeService.selectAll();
        return new Result(roomTypes,Code.GET_OK);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        RoomType roomType = roomTypeService.selectById(id);
        Integer code = roomType != null?Code.GET_OK:Code.GET_ERR;
        String msg = roomType != null?"":"查询失败";
        return new Result(roomType,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody RoomType roomType){
        boolean flag = roomTypeService.save(roomType);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody RoomType roomType){
        List<RoomType> roomTypes = roomTypeService.selectByFields(roomType);
        Integer code = roomTypes != null?Code.GET_OK:Code.GET_ERR;
        String msg = roomTypes != null?"":"查询失败";
        return new Result(roomTypes,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = roomTypeService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody RoomType roomType){
        boolean flag = roomTypeService.update(roomType);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

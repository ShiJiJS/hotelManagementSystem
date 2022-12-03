package com.htmgmt.controller;

import com.htmgmt.pojo.RoomChangeInfos;
import com.htmgmt.service.RoomChangeInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roomChangeInfos")
public class RoomChangeInfosController {
    @Autowired
    private RoomChangeInfosService roomChangeInfosService;

    @GetMapping
    public Result selectAll(){
        List<RoomChangeInfos> roomChangeInfos = roomChangeInfosService.selectAll();
        return new Result(roomChangeInfos,Code.GET_OK,"");
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        RoomChangeInfos roomChangeInfos = roomChangeInfosService.selectById(id);
        Integer code = roomChangeInfos != null?Code.GET_OK:Code.GET_ERR;
        String msg = roomChangeInfos != null?"":"查询失败";
        return new Result(roomChangeInfos,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody RoomChangeInfos roomChangeInfos){
        boolean flag = roomChangeInfosService.save(roomChangeInfos);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody RoomChangeInfos roomChangeInfos){
        List<RoomChangeInfos> roomChangeInfosList = roomChangeInfosService.selectByFields(roomChangeInfos);
        Integer code = roomChangeInfosList != null?Code.GET_OK:Code.GET_ERR;
        String msg = roomChangeInfosList != null?"":"查询失败";
        return new Result(roomChangeInfosList,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = roomChangeInfosService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody RoomChangeInfos roomChangeInfos){
        boolean flag = roomChangeInfosService.update(roomChangeInfos);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

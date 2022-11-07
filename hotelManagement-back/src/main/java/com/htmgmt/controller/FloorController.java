package com.htmgmt.controller;

import com.htmgmt.pojo.Floor;
import com.htmgmt.service.FloorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/floors")
public class FloorController {
    @Autowired
    private FloorService floorService;

    @PostMapping
    public Result save(@RequestBody Floor floor){
        boolean flag = floorService.save(floor);
        return new Result(flag,flag?Code.SAVE_OK:Code.SAVE_ERR,"");
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = floorService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR,"");
    }

    @PutMapping
    public Result update(@RequestBody Floor floor){
        boolean flag = floorService.update(floor);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR,"");
    }

    @GetMapping
    public Result selectAll(){
        List<Floor> floors = floorService.selectAll();
        Integer code = floors != null?Code.GET_OK:Code.GET_ERR;
        String msg = floors != null?"":"查询失败";
        return new Result(floors,code,msg);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Floor floor = floorService.selectById(id);
        Integer code = floor != null?Code.GET_OK:Code.GET_ERR;
        String msg = floor != null?"":"查询失败";
        return new Result(floor,code,msg);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Floor floor){
        List<Floor> floors = floorService.selectByFields(floor);
        Integer code = floors != null?Code.GET_OK:Code.GET_ERR;
        String msg = floors != null?"":"查询失败";
        return new Result(floors,code,msg);
    }

}

package com.htmgmt.controller;

import com.htmgmt.pojo.CheckInInfos;
import com.htmgmt.service.CheckInInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/checkInInfos")
public class CheckInInfosController {

    @Autowired
    private CheckInInfosService checkInInfosService;

    @GetMapping
    public Result selectAll(){
        List<CheckInInfos> checkInInfos = checkInInfosService.selectAll();
        return new Result(checkInInfos,Code.GET_OK,"");
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        CheckInInfos checkInInfos = checkInInfosService.selectById(id);
        Integer code = checkInInfos != null?Code.GET_OK:Code.GET_ERR;
        String msg = checkInInfos != null?"":"查询失败";
        return new Result(checkInInfos,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody CheckInInfos checkInInfos){
        boolean flag = checkInInfosService.save(checkInInfos);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody CheckInInfos checkInInfos){
        List<CheckInInfos> checkInInfosList = checkInInfosService.selectByFields(checkInInfos);
        Integer code = checkInInfosList != null?Code.GET_OK:Code.GET_ERR;
        String msg = checkInInfosList != null?"":"查询失败";
        return new Result(checkInInfosList,code,msg);
    }

    @PostMapping("/reserved")
    public Result reserveToCheckIn(@RequestBody CheckInInfos checkInInfos){
        boolean flag = checkInInfosService.reservedSave(checkInInfos);
        return new Result(flag, flag ? Code.SAVE_OK : Code.SAVE_ERR, "");
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = checkInInfosService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody CheckInInfos checkInInfos){
        boolean flag = checkInInfosService.update(checkInInfos);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

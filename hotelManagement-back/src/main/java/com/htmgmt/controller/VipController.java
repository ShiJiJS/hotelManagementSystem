package com.htmgmt.controller;

import com.htmgmt.pojo.Vips;
import com.htmgmt.service.VipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController()
@RequestMapping("/vips")
public class VipController {

    @Autowired
    private VipsService vipsService;

    @GetMapping
    public Result selectAll(){
        List<Vips> vips = vipsService.selectAll();
        return new Result(vips,Code.GET_OK,"");
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Vips vips = vipsService.selectById(id);
        Integer code = vips != null?Code.GET_OK:Code.GET_ERR;
        String msg = vips != null?"":"查询失败";
        return new Result(vips,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody Vips vips){
        boolean flag = vipsService.save(vips);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Vips vips){
        List<Vips> vipsList = vipsService.selectByFields(vips);
        Integer code = vipsList != null?Code.GET_OK:Code.GET_ERR;
        String msg = vipsList != null?"":"查询失败";
        return new Result(vipsList,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = vipsService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody Vips vips){
        boolean flag = vipsService.update(vips);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }

}

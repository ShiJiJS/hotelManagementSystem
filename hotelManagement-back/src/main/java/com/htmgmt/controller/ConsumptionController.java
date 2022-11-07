package com.htmgmt.controller;

import com.htmgmt.pojo.Consumption;
import com.htmgmt.service.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consumptions")
public class ConsumptionController {

    @Autowired
    private ConsumptionService consumptionService;

    @PostMapping
    public Result save(@RequestBody Consumption consumption){
        boolean flag = consumptionService.save(consumption);
        return new Result(flag,flag?Code.SAVE_OK:Code.SAVE_ERR,"");
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = consumptionService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR,"");
    }

    @PutMapping
    public Result update(@RequestBody Consumption consumption){
        boolean flag = consumptionService.update(consumption);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR,"");
    }

    @GetMapping
    public Result selectAll(){
        List<Consumption> consumptions = consumptionService.selectAll();
        Integer code = consumptions != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumptions != null?"":"查询失败";
        return new Result(consumptions,code,msg);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Consumption consumption = consumptionService.selectById(id);
        Integer code = consumption != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumption != null?"":"查询失败";
        return new Result(consumption,code,msg);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Consumption consumption){
        List<Consumption> consumptions = consumptionService.selectByFields(consumption);
        Integer code = consumptions != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumptions != null?"":"查询失败";
        return new Result(consumptions,code,msg);
    }
}

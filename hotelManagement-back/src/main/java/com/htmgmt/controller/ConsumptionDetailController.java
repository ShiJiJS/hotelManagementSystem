package com.htmgmt.controller;


import com.htmgmt.pojo.ConsumptionDetail;
import com.htmgmt.service.ConsumptionDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("consumptionDetail")
public class ConsumptionDetailController {
    @Autowired
    private ConsumptionDetailService consumptionDetailService;

    @PostMapping
    public Result save(@RequestBody ConsumptionDetail consumptionDetail){
        boolean flag = consumptionDetailService.save(consumptionDetail);
        return new Result(flag,flag?Code.SAVE_OK:Code.SAVE_ERR,"");
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = consumptionDetailService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR,"");
    }

    @DeleteMapping("/consumptionIds/{consumptionIds}")
    public Result deleteByConsumptionId(@PathVariable Integer[] consumptionIds){
        boolean flag = consumptionDetailService.deleteByConsumptionId(consumptionIds);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR,"");
    }

    
    @PutMapping
    public Result update(@RequestBody ConsumptionDetail consumptionDetail){
        boolean flag = consumptionDetailService.update(consumptionDetail);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR,"");
    }

    @GetMapping
    public Result selectAll(){
        List<ConsumptionDetail> consumptionDetails = consumptionDetailService.selectAll();
        Integer code = consumptionDetails != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumptionDetails != null?"":"查询失败";
        return new Result(consumptionDetails,code,msg);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        ConsumptionDetail consumptionDetail = consumptionDetailService.selectById(id);
        Integer code = consumptionDetail != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumptionDetail != null?"":"查询失败";
        return new Result(consumptionDetail,code,msg);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody ConsumptionDetail consumptionDetail){
        List<ConsumptionDetail> consumptionDetails = consumptionDetailService.selectByFields(consumptionDetail);
        Integer code = consumptionDetails != null?Code.GET_OK:Code.GET_ERR;
        String msg = consumptionDetails != null?"":"查询失败";
        return new Result(consumptionDetails,code,msg);
    }

}

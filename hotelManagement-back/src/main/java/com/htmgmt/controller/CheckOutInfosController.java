package com.htmgmt.controller;

import com.htmgmt.pojo.CheckOutInfos;
import com.htmgmt.service.CheckOutInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/checkOutInfos")
public class CheckOutInfosController {
    @Autowired
    private CheckOutInfosService checkOutInfosService;

    @GetMapping
    public Result selectAll(){
        List<CheckOutInfos> checkOutInfos = checkOutInfosService.selectAll();
        return new Result(checkOutInfos,Code.GET_OK,"");
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        CheckOutInfos checkOutInfos = checkOutInfosService.selectById(id);
        Integer code = checkOutInfos != null?Code.GET_OK:Code.GET_ERR;
        String msg = checkOutInfos != null?"":"查询失败";
        return new Result(checkOutInfos,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody CheckOutInfos checkOutInfos){
        boolean flag = checkOutInfosService.save(checkOutInfos);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody CheckOutInfos checkOutInfos){
        List<CheckOutInfos> checkOutInfosList = checkOutInfosService.selectByFields(checkOutInfos);
        Integer code = checkOutInfosList != null?Code.GET_OK:Code.GET_ERR;
        String msg = checkOutInfosList != null?"":"查询失败";
        return new Result(checkOutInfosList,code,msg);
    }

    @PostMapping("/count")
    public Result checkOutCount(@RequestBody CheckOutInfos checkOutInfos){
        BigDecimal receivable = checkOutInfosService.aggregate(checkOutInfos);
        return new Result(receivable, Code.GET_OK, "");
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = checkOutInfosService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody CheckOutInfos checkOutInfos){
        boolean flag = checkOutInfosService.update(checkOutInfos);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

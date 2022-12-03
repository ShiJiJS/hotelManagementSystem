package com.htmgmt.controller;

import com.htmgmt.pojo.GoodsTypes;
import com.htmgmt.service.GoodsTypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goodsTypes")
public class GoodsTypesController {
    @Autowired
    private GoodsTypesService goodsTypesService;

    @GetMapping
    public Result selectAll(){
        List<GoodsTypes> goodsTypes = goodsTypesService.selectAll();
        return new Result(goodsTypes,Code.GET_OK);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        GoodsTypes goodsTypes = goodsTypesService.selectById(id);
        Integer code = goodsTypes != null?Code.GET_OK:Code.GET_ERR;
        String msg = goodsTypes != null?"":"查询失败";
        return new Result(goodsTypes,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody GoodsTypes goodsTypes){
        boolean flag = goodsTypesService.save(goodsTypes);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody GoodsTypes goodsTypes){
        List<GoodsTypes> goodsTypesList = goodsTypesService.selectByFields(goodsTypes);
        Integer code = goodsTypesList != null?Code.GET_OK:Code.GET_ERR;
        String msg = goodsTypesList != null?"":"查询失败";
        return new Result(goodsTypesList,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = goodsTypesService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody GoodsTypes goodsTypes){
        boolean flag = goodsTypesService.update(goodsTypes);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

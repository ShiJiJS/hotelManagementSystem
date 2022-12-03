package com.htmgmt.controller;


import com.htmgmt.pojo.Goods;
import com.htmgmt.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    @GetMapping
    public Result selectAll(){
        List<Goods> goods = goodsService.selectAll();
        return new Result(goods,Code.GET_OK);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        Goods goods = goodsService.selectById(id);
        Integer code = goods != null?Code.GET_OK:Code.GET_ERR;
        String msg = goods != null?"":"查询失败";
        return new Result(goods,code,msg);
    }

    @PostMapping
    public Result save(@RequestBody Goods goods){
        boolean flag = goodsService.save(goods);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody Goods goods){
        List<Goods> goodsList = goodsService.selectByFields(goods);
        Integer code = goodsList != null?Code.GET_OK:Code.GET_ERR;
        String msg = goodsList != null?"":"查询失败";
        return new Result(goodsList,code,msg);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = goodsService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @PutMapping
    public Result update(@RequestBody Goods goods){
        boolean flag = goodsService.update(goods);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }
}

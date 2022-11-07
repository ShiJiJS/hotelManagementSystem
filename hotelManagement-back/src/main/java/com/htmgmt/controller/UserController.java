package com.htmgmt.controller;

import com.htmgmt.pojo.User;
import com.htmgmt.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public Result save(@RequestBody User user){
        boolean flag = userService.save(user);
        return new Result(flag,flag? Code.SAVE_OK:Code.SAVE_ERR);
    }

    @DeleteMapping("/{ids}")
    public Result delete(@PathVariable Integer[] ids){
        boolean flag = userService.delete(ids);
        return new Result(flag,flag?Code.DELETE_OK:Code.DELETE_ERR);
    }

    @GetMapping
    public Result selectAll(){
        List<User> userList = userService.selectAll();
        Integer code = userList != null?Code.GET_OK:Code.GET_ERR;
        String msg = userList != null?"":"查询失败";
        return new Result(userList,code,msg);
    }

    @PutMapping
    public Result update(@RequestBody User user){
        boolean flag = userService.update(user);
        return new Result(flag,flag?Code.UPDATE_OK:Code.UPDATE_ERR);
    }

    @GetMapping("/{id}")
    public Result selectById(@PathVariable Integer id){
        User user = userService.selectById(id);
        Integer code = user != null?Code.GET_OK:Code.GET_ERR;
        String msg = user != null?"":"查询失败";
        return new Result(user,code,msg);
    }

    @PostMapping("/search")
    public Result selectByFields(@RequestBody User user){
        List<User> users = userService.selectByFields(user);
        Integer code = users != null?Code.GET_OK:Code.GET_ERR;
        String msg = users != null?"":"查询失败";
        return new Result(users,code,msg);
    }
}

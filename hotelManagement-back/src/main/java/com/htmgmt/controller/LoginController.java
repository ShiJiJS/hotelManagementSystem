package com.htmgmt.controller;

import com.htmgmt.pojo.User;
import com.htmgmt.service.UserService;
import com.htmgmt.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private UserService userService;

	@PostMapping
	public Map<String,Object> login(@RequestBody User loginUser) {
        Map<String,Object> loginMap = new HashMap<>();
        Map<String,Object> dataMap = new HashMap<>();
        Map<String,Object> metaMap = new HashMap<>();
    	if(userService.selectByUserName(loginUser.getUserName())!=null) {
    		if(userService.selectByUserName(loginUser.getUserName()).getPassword().equals(loginUser.getPassword())) {
    	        String token = TokenUtil.sign(loginUser.getUserName());
    	        dataMap.put("token",token);
    	        dataMap.put("type",userService.selectByUserName(loginUser.getUserName()).getType());
    	        loginMap.put("data",dataMap);
    	        metaMap.put("msg","登录成功");
    	       	metaMap.put("status",200);
    		} else {
                metaMap.put("msg","登录失败，密码错误");
                metaMap.put("status",202);
            }
    	} else {
            metaMap.put("msg","登录失败，没有查找到此用户");
            metaMap.put("status",201);
        }
        loginMap.put("meta",metaMap);
        System.out.println(loginMap);
        return  loginMap;
    }
	
    @PostMapping("/currentUser")
    public Map<String,Object> currentUser(@RequestBody String token){
    	Map<String,Object> currentUser = new HashMap<>();
    	currentUser.put("userName",TokenUtil.getUserName(token));
    	currentUser.put("userType",userService.selectByUserName(TokenUtil.getUserName(token)).getType());
        return currentUser;
    }
}


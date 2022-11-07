package com.htmgmt.servlet;

import com.alibaba.fastjson.JSON;
import com.htmgmt.controller.Code;
import com.htmgmt.controller.Result;
import com.htmgmt.pojo.GoodsTypes;
import com.htmgmt.pojo.RoomType;
import com.htmgmt.service.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet({"/roomTypes", "/roomTypes/*"})
public class RoomTypeServlet extends HttpServlet {

    @Autowired
    private RoomTypeService roomTypeService;

    //查询操作
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //拿到路径
        String requestURI = req.getRequestURI();
        if(requestURI.equals("/roomTypes")){
            //无路径参数，即请求所有
            List<RoomType> roomTypes = roomTypeService.selectAll();
            Result result = new Result(roomTypes, Code.GET_OK,"");
            String jsonString = JSON.toJSONString(result);
            resp.setContentType("text/json;charset=utf-8");
            resp.getWriter().write(jsonString);
        }else{
            //有路径参数，查对应id的
            //通过字符串相减，取出路径后的id
            Integer id = Integer.valueOf(requestURI.replaceAll("/roomTypes/",""));
            //调用service层接口查询
            RoomType roomType = roomTypeService.selectById(id);
            //封装结果对象
            Result result = new Result(roomType,Code.GET_OK,"");
            //转成json格式
            String jsonString = JSON.toJSONString(result);
            //返回数据
            resp.setContentType("text/json;charset=utf-8");
            resp.getWriter().write(jsonString);
        }
    }

    //新增操作
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //接收数据
        String requestURI = request.getRequestURI();
        BufferedReader br = request.getReader();
        String params = br.lines().collect(Collectors.joining());
        //转为POJO对象
        RoomType roomType = JSON.parseObject(params, RoomType.class);
        if (requestURI.equals("/roomTypes")) {
            //调用service层接口添加
            boolean flag = roomTypeService.save(roomType);

            //返回结果
            Result result = new Result(flag, flag ? Code.SAVE_OK : Code.SAVE_ERR, "");
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        } else if (requestURI.equals("/roomTypes/search")){
            //调用service层接口查询姓名
            List<RoomType> retRoomTypes = roomTypeService.selectByFields(roomType);

            //返回结果
            Result result = new Result(retRoomTypes, Code.SAVE_OK , "");
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //接收数据
        BufferedReader br = req.getReader();
        String params = br.lines().collect(Collectors.joining());

        //转为RoomType对象
        RoomType roomType = JSON.parseObject(params,RoomType.class);

        //调用service层方法来添加
        roomTypeService.update(roomType);

        //返回结果
        Result result = new Result(null, Code.SAVE_OK,"");
        String jsonString = JSON.toJSONString(result);
        resp.getWriter().write(jsonString);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //接受一个或多个路径参数
        //拿到路径
        String requestURI = req.getRequestURI();
        //通过字符串相减，取出路径后的id
        String[] ids_string = requestURI.replaceAll("/roomTypes/","").split(",");

        List<Integer> ids_list = new ArrayList<>();
        for (String s : ids_string) {
            ids_list.add(Integer.valueOf(s));
        }

        Integer[] ids = ids_list.toArray(new Integer[0]);

        //调用service层方法
        roomTypeService.delete(ids);

        //返回结果
        Result result = new Result(null,Code.DELETE_OK,"");
        String jsonString = JSON.toJSONString(result);
        resp.getWriter().write(jsonString);
    }
}
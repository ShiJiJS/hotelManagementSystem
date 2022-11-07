package com.htmgmt.servlet;

import com.alibaba.fastjson.JSON;
import com.htmgmt.controller.Code;
import com.htmgmt.controller.Result;
import com.htmgmt.pojo.RoomChangeInfos;
import com.htmgmt.service.RoomChangeInfosService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet({"/roomChangeInfos", "/roomChangeInfos/*"})
public class RoomChangeInfosServlet extends HttpServlet {
    @Autowired
    private RoomChangeInfosService roomChangeInfosService;

    //select
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //拿到路径
        String requestURI = request.getRequestURI();
        if (requestURI.equals("/roomChangeInfos")) {
            //无路径参数，即请求所有
            List<RoomChangeInfos> roomChangeInfos = roomChangeInfosService.selectAll();
            //返回数据
            Result result = new Result(roomChangeInfos, Code.GET_OK, "");   //封装结果对象
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");//转成json格式
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        } else {
            //有路径参数，查对应id的
            //通过字符串相减，取出路径后的id
            Integer id = Integer.valueOf(requestURI.replaceAll("/roomChangeInfos/", ""));
            //调用service层接口查询
            RoomChangeInfos roomChangeInfos = roomChangeInfosService.selectById(id);

            //返回数据
            Result result = new Result(roomChangeInfos, Code.GET_OK, "");
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        }
    }

    //save
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //接收数据
        String requestURI = request.getRequestURI();
        BufferedReader br = request.getReader();
        String params = br.lines().collect(Collectors.joining());
        //转为POJO对象
        RoomChangeInfos roomChangeInfos = JSON.parseObject(params, RoomChangeInfos.class);

        if (requestURI.equals("/roomChangeInfos")) {
            //调用service层接口添加
            boolean flag = roomChangeInfosService.save(roomChangeInfos);

            //返回结果
            Result result = new Result(flag, flag ? Code.SAVE_OK : Code.SAVE_ERR, "");
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        } else if (requestURI.equals("/roomChangeInfos/search")) {
            //调用service层接口查询
            List<RoomChangeInfos> retRoomChangeInfos = roomChangeInfosService.selectByFields(roomChangeInfos);

            //返回结果
            Result result = new Result(retRoomChangeInfos, Code.SAVE_OK, "");
            String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        }
    }

    //update
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //接收数据
        BufferedReader br = request.getReader();
        String params = br.lines().collect(Collectors.joining());

        //转为POJO对象
        RoomChangeInfos roomChangeInfos = JSON.parseObject(params, RoomChangeInfos.class);

        //调用service层方法来修改
        boolean flag = roomChangeInfosService.update(roomChangeInfos);

        //返回结果
        Result result = new Result(flag, flag ? Code.SAVE_OK : Code.SAVE_ERR, "");
        String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    //delete
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //接受一个或多个路径参数
        //拿到路径
        String requestURI = request.getRequestURI();
        //通过字符串相减，取出路径后的id
        String[] ids_string = requestURI.replaceAll("/roomChangeInfos/", "").split(",");

        ArrayList<Integer> ids_list = new ArrayList<>();
        for (String s : ids_string) {
            ids_list.add(Integer.valueOf(s));
        }

        Integer[] ids = ids_list.toArray(new Integer[0]);

        //调用service层方法
        boolean flag = roomChangeInfosService.delete(ids);

        //返回结果
        Result result = new Result(flag, flag ? Code.DELETE_OK : Code.SAVE_ERR, "");
        String jsonString = JSON.toJSONStringWithDateFormat(result, "yyyy-MM-dd HH:mm:ss");
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }
}

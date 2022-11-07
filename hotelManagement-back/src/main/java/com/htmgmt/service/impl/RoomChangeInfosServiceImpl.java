package com.htmgmt.service.impl;

import com.alibaba.fastjson.JSON;
import com.htmgmt.controller.RoomStatus;
import com.htmgmt.mapper.CheckInInfosMapper;
import com.htmgmt.mapper.RoomChangeInfosMapper;
import com.htmgmt.mapper.RoomMapper;
import com.htmgmt.pojo.CheckInInfos;
import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.RoomChangeInfos;
import com.htmgmt.service.CheckInInfosService;
import com.htmgmt.service.RoomChangeInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomChangeInfosServiceImpl implements RoomChangeInfosService {
    @Autowired
    private RoomChangeInfosMapper roomChangeInfosMapper;
    @Autowired
    private CheckInInfosMapper checkInInfosMapper;
    @Autowired
    private CheckInInfosService checkInInfosService;
    @Autowired
    private RoomMapper roomMapper;

    @Override
    public boolean save(RoomChangeInfos roomChangeInfos) {
        //将roomChangeInfos转换为modifyCheckInInfos
        Integer afterRoomNumber = roomChangeInfos.getAfterRoomNumber();//保存不同的字段
        roomChangeInfos.setAfterRoomNumber(null);
        roomChangeInfos.setOriginalRoomNumber(null);
        String modifyInfoString = JSON.toJSONStringWithDateFormat(roomChangeInfos, "yyyy-MM-dd HH:mm:ss");
        CheckInInfos modifyCheckInInfos = JSON.parseObject(modifyInfoString, CheckInInfos.class);
        modifyCheckInInfos.setRoomNumber(afterRoomNumber);
        //读取旧登记表checkInInfos
        CheckInInfos checkInInfos = checkInInfosMapper.selectById(modifyCheckInInfos.getId());

        //生成并写入换房表
        Integer originalRoomNumber = checkInInfos.getRoomNumber();//保存不同的字段
        checkInInfos.setRoomNumber(null);
        String originalInfoString = JSON.toJSONStringWithDateFormat(checkInInfos, "yyyy-MM-dd HH:mm:ss");
        RoomChangeInfos newRoomChangeInfos = JSON.parseObject(originalInfoString, RoomChangeInfos.class);
        newRoomChangeInfos.setOriginalRoomNumber(originalRoomNumber);
        newRoomChangeInfos.setAfterRoomNumber(afterRoomNumber);
        checkInInfos.setRoomNumber(originalRoomNumber);
        roomChangeInfosMapper.save(newRoomChangeInfos);

        //合成新登记表
        checkInInfosService.modify(checkInInfos, modifyCheckInInfos);
        //写入新登记表
        checkInInfosMapper.update(checkInInfos);
        //修改新房信息
        Room room = new Room();
        room.setId(checkInInfos.getRoomNumber());
        room.setStatus(RoomStatus.OCCUPIED.getName());  //入住状态
        roomMapper.update(room);
        //修改旧房信息
        room.setId(originalRoomNumber);
        room.setStatus(RoomStatus.VACANT.getName());  //入住状态
        roomMapper.update(room);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        roomChangeInfosMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(RoomChangeInfos roomChangeInfos) {
        roomChangeInfosMapper.update(roomChangeInfos);
        return true;
    }

    @Override
    public List<RoomChangeInfos> selectAll() {
        return roomChangeInfosMapper.selectAll();
    }

    @Override
    public RoomChangeInfos selectById(Integer id) {
        return roomChangeInfosMapper.selectById(id);
    }

    @Override
    public List<RoomChangeInfos> selectByFields(RoomChangeInfos roomChangeInfos) {
        return roomChangeInfosMapper.selectByFields(roomChangeInfos);
    }
}

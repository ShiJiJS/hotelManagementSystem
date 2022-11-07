package com.htmgmt.service.impl;

import com.htmgmt.controller.MembershipStatus;
import com.htmgmt.controller.ReservationStatus;
import com.htmgmt.controller.RoomStatus;
import com.htmgmt.mapper.CheckInInfosMapper;
import com.htmgmt.mapper.ReservationsMapper;
import com.htmgmt.mapper.RoomMapper;
import com.htmgmt.mapper.VipsMapper;
import com.htmgmt.pojo.CheckInInfos;
import com.htmgmt.pojo.Reservations;
import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.Vips;
import com.htmgmt.service.CheckInInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CheckInInfosServiceImpl implements CheckInInfosService {
    @Autowired
    private CheckInInfosMapper checkInInfosMapper;
    @Autowired
    private VipsMapper vipsMapper;
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private ReservationsMapper reservationsMapper;

    @Override
    public boolean save(CheckInInfos checkInInfos) {//登记入住
        //更新客房数据
        Room room = new Room();
        room.setId(checkInInfos.getRoomNumber());
        room.setStatus(RoomStatus.OCCUPIED.getName());  //入住状态
        roomMapper.update(room);
        //客房数据导入入住信息
        Room localRoom = roomMapper.selectById(checkInInfos.getRoomNumber());
        checkInInfos.setRoomType(localRoom.getType());                  //导入客房类型
        checkInInfos.setStandardPrice(localRoom.getStandardPrice());    //导入标准价格
        checkInInfos.setDiscountPrice(localRoom.getDiscountPrice());    //导入折后价
        if (checkInInfos.getArriveTime() == null) checkInInfos.setArriveTime(new Date());//更新入住时间

        if (checkInInfos.getVipId() != null&&vipsMapper.selectById(checkInInfos.getVipId())!=null) {
            //更新会员数据
            Vips vips = new Vips();
            vips.setId(checkInInfos.getVipId());
            vips.setLatestCheckInTime(checkInInfos.getArriveTime());//更新最后入住时间
            vipsMapper.update(vips);

            Vips localVip = vipsMapper.selectById(checkInInfos.getVipId());
            if (localVip.getLevel().equals(MembershipStatus.VIP.getName())) {
                checkInInfos.setVipPrice(localRoom.getVipUserPrice());//导入VIP会员价格
            } else {
                checkInInfos.setVipPrice(localRoom.getStandardUserPrice());//导入普通会员价格
            }
        }
        checkInInfosMapper.save(checkInInfos);
        return true;
    }

    @Override
    public boolean reservedSave(CheckInInfos checkInInfos) {//预定转入住
        //根据预定单号，导入数据
        Reservations localReservations = reservationsMapper.selectById(checkInInfos.getId());
        if (checkInInfos.getRoomNumber() == null) {checkInInfos.setRoomNumber(localReservations.getRoomNumber());}
        checkInInfos.setRoomType(localReservations.getRoomType());
        checkInInfos.setStandardPrice(localReservations.getStandardPrice());
        checkInInfos.setDiscountPrice(localReservations.getDiscountPrice());
        if (checkInInfos.getDeposit() == null) {checkInInfos.setDeposit(localReservations.getDeposit());}
        if (checkInInfos.getPersonName() == null) {checkInInfos.setPersonName(localReservations.getPersonName());}
        if (checkInInfos.getCertificateCategory() == null) {checkInInfos.setCertificateCategory(localReservations.getCertificateCategory());}
        if (checkInInfos.getCertificateNumber() == null) {checkInInfos.setCertificateNumber(localReservations.getCertificateNumber());}
        if (checkInInfos.getPhoneNumber() == null) {checkInInfos.setPhoneNumber(localReservations.getPhoneNumber());}
        if (checkInInfos.getArriveTime() == null) {checkInInfos.setArriveTime(localReservations.getArriveTime());}
        if (checkInInfos.getLeaveTime() == null) {checkInInfos.setLeaveTime(localReservations.getLeaveTime());}
        if (checkInInfos.getNumberOfOccupants() == null) {checkInInfos.setNumberOfOccupants(localReservations.getNumberOfOccupants());}
        if (checkInInfos.getVipId() == null) {checkInInfos.setVipId(localReservations.getVipId());}
        if (checkInInfos.getVipPrice() == null) {checkInInfos.setVipPrice(localReservations.getVipPrice());}
        //更新客房数据
        Room room = new Room();
        room.setId(checkInInfos.getRoomNumber());
        room.setStatus(RoomStatus.OCCUPIED.getName());  //入住状态
        roomMapper.update(room);
        if (checkInInfos.getVipId() != null) {
            //更新会员数据
            Vips vips = new Vips();
            vips.setId(checkInInfos.getVipId());
            vips.setLatestCheckInTime(checkInInfos.getArriveTime());//更新最后入住时间
            vipsMapper.update(vips);
        }
        //更新订单数据
        Reservations reservations = new Reservations();
        reservations.setId(localReservations.getId());
        reservations.setReservationStatus(ReservationStatus.STAYED.getName());//订单为已入住状态
        reservationsMapper.update(reservations);

        checkInInfosMapper.save(checkInInfos);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        checkInInfosMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(CheckInInfos checkInInfos) {
        checkInInfosMapper.update(checkInInfos);
        return true;
    }

    @Override
    public void modify(CheckInInfos checkInInfos, CheckInInfos modify) {
        if (modify.getRoomNumber() != null) {checkInInfos.setRoomNumber(modify.getRoomNumber());
            Room localRoom = roomMapper.selectById(modify.getRoomNumber());
            checkInInfos.setRoomType(localRoom.getType());
            checkInInfos.setStandardPrice(localRoom.getStandardPrice());
            checkInInfos.setDiscountPrice(localRoom.getDiscountPrice());}
        if (modify.getDeposit() != null) {checkInInfos.setDeposit(modify.getDeposit());}
        if (modify.getPersonName() != null) {checkInInfos.setPersonName(modify.getPersonName());}
        if (modify.getCertificateCategory() != null) {checkInInfos.setCertificateCategory(modify.getCertificateCategory());}
        if (modify.getCertificateNumber() != null) {checkInInfos.setCertificateNumber(modify.getCertificateNumber());}
        if (modify.getPhoneNumber() != null) {checkInInfos.setPhoneNumber(modify.getPhoneNumber());}
        if (modify.getArriveTime() != null) {checkInInfos.setArriveTime(modify.getArriveTime());}
        if (modify.getLeaveTime() != null) {checkInInfos.setLeaveTime(modify.getLeaveTime());}
        if (modify.getNumberOfOccupants() != null) {checkInInfos.setNumberOfOccupants(modify.getNumberOfOccupants());}
        if (modify.getOperator() != null) {checkInInfos.setOperator(modify.getOperator());}
        if (modify.getVipId() != null) {checkInInfos.setVipId(modify.getVipId());}
        if (checkInInfos.getVipId() != null){
            Vips localVip = vipsMapper.selectById(checkInInfos.getVipId());
            Room localRoom = roomMapper.selectById(checkInInfos.getRoomNumber());
            if (localVip.getLevel().equals(MembershipStatus.VIP.getName())) {
                checkInInfos.setVipPrice(localRoom.getVipUserPrice());
            } else {
                checkInInfos.setVipPrice(localRoom.getStandardUserPrice());
            }
        }
        if (modify.getBreakfast() != null) {checkInInfos.setBreakfast(modify.getBreakfast());}
        if (modify.getWakeUp() != null) {checkInInfos.setWakeUp(modify.getWakeUp());}
        if (modify.getRemark() != null) {checkInInfos.setRemark(modify.getRemark());}
    }

    @Override
    public List<CheckInInfos> selectAll() {
        return checkInInfosMapper.selectAll();
    }

    @Override
    public CheckInInfos selectById(Integer id) {
        return checkInInfosMapper.selectById(id);
    }

    @Override
    public List<CheckInInfos> selectByFields(CheckInInfos checkInInfos) {
        return checkInInfosMapper.selectByFields(checkInInfos);
    }
}

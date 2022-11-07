package com.htmgmt.service.impl;


import com.htmgmt.controller.MembershipStatus;
import com.htmgmt.controller.ReservationStatus;
import com.htmgmt.controller.RoomStatus;
import com.htmgmt.mapper.ReservationsMapper;
import com.htmgmt.mapper.RoomMapper;
import com.htmgmt.mapper.VipsMapper;
import com.htmgmt.pojo.Reservations;
import com.htmgmt.pojo.Room;
import com.htmgmt.pojo.Vips;
import com.htmgmt.service.ReservationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;




@Service
public class ReservationsServiceImpl implements ReservationsService {
    @Autowired
    private ReservationsMapper reservationsMapper;
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private VipsMapper vipsMapper;

    @Override
    public boolean save(Reservations reservations) {
        //添加预定，状态正常
        reservations.setReservationStatus(ReservationStatus.NORMAL.getName());
        //导入room数据
        Room localRoom = roomMapper.selectById(reservations.getRoomNumber());
        reservations.setRoomType(localRoom.getType());
        reservations.setStandardPrice(localRoom.getStandardPrice());
        reservations.setDiscountPrice(localRoom.getDiscountPrice());

        //更新room为预定状态
        Room room = new Room();
        room.setId(reservations.getRoomNumber());
        room.setStatus(RoomStatus.RESERVED.getName());
        roomMapper.update(room);

        //更新会员预定信息
        if (reservations.getVipId() != null&&vipsMapper.selectById(reservations.getVipId())!=null)
        {
            Vips vips = new Vips();
            vips.setId(reservations.getVipId());
            vips.setLatestReserveTime(new Date());
            vipsMapper.update(vips);
            //导入room会员价
            Vips localVip = vipsMapper.selectById(reservations.getVipId());
            if (localVip.getLevel().equals(MembershipStatus.VIP.getName())) {
                reservations.setVipPrice(localRoom.getVipUserPrice());//导入VIP会员价格
            } else {
                reservations.setVipPrice(localRoom.getStandardUserPrice());//导入普通会员价格
            }
        }

        reservationsMapper.save(reservations);
        return true;
    }

    @Override
    public boolean delete(Integer[] ids) {
        reservationsMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(Reservations reservations) {
        Reservations localRes = reservationsMapper.selectById(reservations.getId());
        if (localRes.getReservationStatus().equals(ReservationStatus.STAYED.getName())) {
            //对于已入住状态的预定信息不能进行修改和取消操作。
            return false;
        } else {

            //update room table
            //设定room ID
            Room room = new Room();
            room.setId(localRes.getRoomNumber());

            if (ReservationStatus.CANCELLED.getName().equals(reservations.getReservationStatus())
                    && ReservationStatus.NORMAL.getName().equals(localRes.getReservationStatus())) {
                // ReservationStatus == cancelled 取消预定
                // localReserveStatus == normal
                //更新客房数据
                room.setStatus(RoomStatus.VACANT.getName());
                roomMapper.update(room);

            }else if (ReservationStatus.STAYED.getName().equals(reservations.getReservationStatus())) {
                if (ReservationStatus.NORMAL.getName().equals(localRes.getReservationStatus())){
                    // ReservationStatus == stayed 转入住
                    // localReserveStatus == normal
                    //更新客房数据
                    room.setStatus(RoomStatus.OCCUPIED.getName());
                    roomMapper.update(room);
                    //更新会员入住信息
                    if (localRes.getVipId() != null)
                    {
                        Vips vips = new Vips();
                        vips.setId(localRes.getVipId());
                        vips.setLatestCheckInTime(new Date());
                        vipsMapper.update(vips);
                    }
                    reservations.setRoomNumber(null);
                }else{
                    //cancelled 不可转入住
                    return false;
                }
            }else{
                //必须保持原有状态
                reservations.setReservationStatus(null);
            }
            reservationsMapper.update(reservations);
            return true;
        }
    }

    @Override
    public List<Reservations> selectAll() {
        return reservationsMapper.selectAll();
    }

    @Override
    public Reservations selectById(Integer id) {
        return reservationsMapper.selectById(id);
    }

    @Override
    public List<Reservations> selectByFields(Reservations reservations) { return reservationsMapper.selectByFields(reservations); }
}

package com.htmgmt.service.impl;

import com.htmgmt.controller.RoomStatus;
import com.htmgmt.mapper.CheckInInfosMapper;
import com.htmgmt.mapper.CheckOutInfosMapper;
import com.htmgmt.mapper.ConsumptionMapper;
import com.htmgmt.mapper.RoomMapper;
import com.htmgmt.pojo.CheckInInfos;
import com.htmgmt.pojo.CheckOutInfos;
import com.htmgmt.pojo.Consumption;
import com.htmgmt.pojo.Room;
import com.htmgmt.service.CheckOutInfosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@Service
public class CheckOutInfosServiceImpl implements CheckOutInfosService {
    @Autowired
    private CheckOutInfosMapper checkOutInfosMapper;
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private CheckInInfosMapper checkInInfosMapper;
    @Autowired
    private ConsumptionMapper consumptionMapper;

    @Override
    public boolean save(CheckOutInfos checkOutInfos) {
        //通过CheckInInfos补全信息
        /*
        CheckInInfos checkInInfos = checkInInfosMapper.selectById(checkOutInfos.getId());
        checkOutInfos.setRoomNumber(checkInInfos.getRoomNumber());  //房号
        if (checkInInfos.getVipPrice() != null) {                   //房价
            checkOutInfos.setDiscountPrice(checkInInfos.getVipPrice());
        } else {
            checkOutInfos.setDiscountPrice(checkInInfos.getDiscountPrice());
        }
        checkOutInfos.setDeposit(checkInInfos.getDeposit());
        checkOutInfos.setDays(lengthOfStay(checkInInfos.getArriveTime(),checkInInfos.getLeaveTime()));//入住天数
        checkOutInfos.setTotalRoomPrice(checkOutInfos.getDiscountPrice().multiply(new BigDecimal(checkOutInfos.getDays())));//总房价=房价*入住天数

        //店内消费
        Consumption consumption = consumptionMapper.selectById(checkOutInfos.getId());
        checkOutInfos.setGoodsCost(consumption == null?new BigDecimal(0):consumption.getTotalPrice());

        if (checkOutInfos.getFoodCost() == null) { checkOutInfos.setFoodCost(new BigDecimal(0)); }
        if (checkOutInfos.getPhoneCost() == null) { checkOutInfos.setPhoneCost( new BigDecimal(0)); }
        BigDecimal receivable = checkOutInfos.getTotalRoomPrice()     //应收金额
                .add(checkOutInfos.getGoodsCost())
                .add(checkOutInfos.getFoodCost())
                .add(checkOutInfos.getPhoneCost())
                .subtract(checkOutInfos.getDeposit());
        */
        BigDecimal receivable = aggregate(checkOutInfos);//通过CheckInInfos补全信息
        if (receivable.compareTo(new BigDecimal(0)) >= 0) {
            //收款
            checkOutInfos.setActualReceivable(receivable);
            checkOutInfos.setRefundableDeposit(new BigDecimal(0));
            checkOutInfos.setChange(checkOutInfos.getPaidIn().subtract(receivable));
        } else {
            //退款
            checkOutInfos.setActualReceivable(new BigDecimal(0));
            checkOutInfos.setRefundableDeposit(new BigDecimal(0).subtract(receivable));
            checkOutInfos.setChange(checkOutInfos.getPaidIn());
        }

        //更新客房数据
        Room room = new Room();
        room.setId(checkOutInfos.getRoomNumber());
        room.setStatus(RoomStatus.VACANT.getName());
        roomMapper.update(room);

        checkOutInfosMapper.save(checkOutInfos);
        return true;
    }

    @Override
    public BigDecimal aggregate(CheckOutInfos checkOutInfos) {
        //通过CheckInInfos补全信息
        CheckInInfos checkInInfos = checkInInfosMapper.selectById(checkOutInfos.getId());
        checkOutInfos.setRoomNumber(checkInInfos.getRoomNumber());  //房号
        if (checkInInfos.getVipId() != null) {                   //房价
            checkOutInfos.setDiscountPrice(checkInInfos.getVipPrice());
        } else {
            checkOutInfos.setDiscountPrice(checkInInfos.getDiscountPrice());
        }
        checkOutInfos.setDeposit(checkInInfos.getDeposit());
        checkOutInfos.setDays(lengthOfStay(checkInInfos.getArriveTime(),checkInInfos.getLeaveTime()));//入住天数
        checkOutInfos.setTotalRoomPrice(checkOutInfos.getDiscountPrice().multiply(new BigDecimal(checkOutInfos.getDays())));//总房价=房价*入住天数

        //店内消费
        Consumption consumption = consumptionMapper.selectById(checkOutInfos.getId());
        checkOutInfos.setGoodsCost(consumption == null?new BigDecimal(0):consumption.getTotalPrice());

        if (checkOutInfos.getFoodCost() == null) { checkOutInfos.setFoodCost(new BigDecimal(0)); }
        if (checkOutInfos.getPhoneCost() == null) { checkOutInfos.setPhoneCost( new BigDecimal(0)); }
        return checkOutInfos.getTotalRoomPrice()     //应收金额
                .add(checkOutInfos.getGoodsCost())
                .add(checkOutInfos.getFoodCost())
                .add(checkOutInfos.getPhoneCost())
                .subtract(checkOutInfos.getDeposit());
    }

    public Integer lengthOfStay(Date arrival, Date departure) {
        LocalDateTime arrivalTime = arrival.toInstant().atZone( ZoneId.systemDefault() ).toLocalDateTime();
        LocalDateTime departureTime = departure.toInstant().atZone( ZoneId.systemDefault() ).toLocalDateTime();
        LocalDate arrivalDate = arrivalTime.toLocalDate();
        LocalDate departureDate = departureTime.toLocalDate();

        Long days = ChronoUnit.DAYS.between(arrivalDate,departureDate);
        if (arrivalTime.getHour() < 12){days++;}
        if (departureTime.getHour() > 11) {days++;}
        return days.intValue();
    }

    @Override
    public boolean delete(Integer[] ids) {
        checkOutInfosMapper.deleteByIds(ids);
        return true;
    }

    @Override
    public boolean update(CheckOutInfos checkOutInfos) {
        checkOutInfosMapper.update(checkOutInfos);
        return true;
    }

    @Override
    public List<CheckOutInfos> selectAll() {
        return checkOutInfosMapper.selectAll();
    }

    @Override
    public CheckOutInfos selectById(Integer id) {
        return checkOutInfosMapper.selectById(id);
    }

    @Override
    public List<CheckOutInfos> selectByFields(CheckOutInfos checkOutInfos) {
        return checkOutInfosMapper.selectByFields(checkOutInfos);
    }
}

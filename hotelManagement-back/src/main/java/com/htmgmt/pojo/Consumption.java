package com.htmgmt.pojo;

import java.math.BigDecimal;
import java.util.Date;

public class Consumption {
    private Integer id;
    private Integer checkInId;
    private Integer roomId;
    private BigDecimal totalPrice;
    private String operator;
    private Date time;

    @Override
    public String toString() {
        return "Consumptions{" +
                "id=" + id +
                ", checkInId=" + checkInId +
                ", roomId=" + roomId +
                ", totalPrice=" + totalPrice +
                ", operator='" + operator + '\'' +
                ", time=" + time +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCheckInId() {
        return checkInId;
    }

    public void setCheckInId(Integer checkInId) {
        this.checkInId = checkInId;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}

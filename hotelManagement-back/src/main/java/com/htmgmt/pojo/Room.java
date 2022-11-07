package com.htmgmt.pojo;

import java.math.BigDecimal;

public class Room {
    private Integer id;
    private String type;
    private String status;
    private String floor;
    private BigDecimal standardPrice;
    private BigDecimal discountPrice;
    private BigDecimal standardUserPrice;
    private BigDecimal vipUserPrice;
    private String remark;

    public Room() {
    }

    public Room(Integer id, String type, String status, String floor, BigDecimal standardPrice, BigDecimal discountPrice, BigDecimal standardUserPrice, BigDecimal vipUserPrice, String remark) {
        this.id = id;
        this.type = type;
        this.status = status;
        this.floor = floor;
        this.standardPrice = standardPrice;
        this.discountPrice = discountPrice;
        this.standardUserPrice = standardUserPrice;
        this.vipUserPrice = vipUserPrice;
        this.remark = remark;
    }

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", status='" + status + '\'' +
                ", floor='" + floor + '\'' +
                ", standardPrice=" + standardPrice +
                ", discountPrice=" + discountPrice +
                ", standardUserPrice=" + standardUserPrice +
                ", vipUserPrice=" + vipUserPrice +
                ", remark='" + remark + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public BigDecimal getStandardPrice() {
        return standardPrice;
    }

    public void setStandardPrice(BigDecimal standardPrice) {
        this.standardPrice = standardPrice;
    }

//    public BigDecimal getdiscountPrice() {
//        return discountPrice;
//    }
//
//    public void setdiscountPrice(BigDecimal discountPrice) {
//        this.discountPrice = discountPrice;
//    }


    public BigDecimal getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(BigDecimal discountPrice) {
        this.discountPrice = discountPrice;
    }

    public BigDecimal getStandardUserPrice() {
        return standardUserPrice;
    }

    public void setStandardUserPrice(BigDecimal standardUserPrice) {
        this.standardUserPrice = standardUserPrice;
    }

    public BigDecimal getVipUserPrice() {
        return vipUserPrice;
    }

    public void setVipUserPrice(BigDecimal vipUserPrice) {
        this.vipUserPrice = vipUserPrice;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}

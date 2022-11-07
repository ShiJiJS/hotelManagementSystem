package com.htmgmt.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

public class Vips {
    private Integer id;
    private String name;
    private String gender;
    private String password;
    private String phoneNumber;
    private String address;
    private String email;
    private Integer mark;
    private String level;
    private Date latestCheckInTime;
    private Date latestReserveTime;
    private String remark;

    public Vips() {}

    public Integer getId() {return id;}

    public void setId(Integer id) {this.id = id;}


    public String getName() {return name;}

    public void setName(String name) {this.name = name;}


    public String getGender() {return gender;}

    public void setGender(String gender) {this.gender = gender;}


    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}


    public String getPhoneNumber() {return phoneNumber;}

    public void setPhoneNumber(String phoneNumber) {this.phoneNumber = phoneNumber;}


    public String getAddress() {return address;}

    public void setAddress(String address) {this.address = address;}


    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}


    public Integer getMark() {return mark;}

    public void setMark(Integer mark) {this.mark = mark;}


    public String getLevel() {return level;}

    public void setLevel(String level) {this.level = level;}


    public Date getLatestCheckInTime() {return latestCheckInTime;}

    public void setLatestCheckInTime(Date latestCheckInTime) {this.latestCheckInTime = latestCheckInTime;}


    public Date getLatestReserveTime() {return latestReserveTime;}

    public void setLatestReserveTime(Date latestReserveTime) {this.latestReserveTime = latestReserveTime;}


    public String getRemark() {return remark;}

    public void setRemark(String remark) {this.remark = remark;}


    @Override
    public String toString() {
        return "Vips{" +
                "id='" + id + '\'' +
                "name='" + name + '\'' +
                "gender='" + gender + '\'' +
                "password='" + password + '\'' +
                "phoneNumber='" + phoneNumber + '\'' +
                "address='" + address + '\'' +
                "email='" + email + '\'' +
                "mark='" + mark + '\'' +
                "level='" + level + '\'' +
                "latestCheckInTime='" + latestCheckInTime + '\'' +
                "latestReserveTime='" + latestReserveTime + '\'' +
                "remark='" + remark + '\'' +
                '}';
    }
}

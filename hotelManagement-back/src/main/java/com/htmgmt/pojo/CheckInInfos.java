package com.htmgmt.pojo;

import com.sun.org.apache.xpath.internal.operations.Bool;

import java.math.BigDecimal;
import java.util.Date;

public class CheckInInfos {
	private Integer id;
	private Integer roomNumber;
	private String roomType;
	private BigDecimal standardPrice;
	private BigDecimal discountPrice;
	private BigDecimal deposit;
	private String personName;
	private String certificateCategory;
	private String certificateNumber;
	private String phoneNumber;
	private Date arriveTime;
	private Date leaveTime;
	private Integer numberOfOccupants;
	private String operator;
	private Integer vipId;
	private BigDecimal vipPrice;
	private Boolean breakfast;
	private Boolean wakeUp;
	private String remark;

	public CheckInInfos() {}

	public Integer getId() {return id;}

	public void setId(Integer id) {this.id = id;}


	public Integer getRoomNumber() {return roomNumber;}

	public void setRoomNumber(Integer roomNumber) {this.roomNumber = roomNumber;}


	public String getRoomType() {return roomType;}

	public void setRoomType(String roomType) {this.roomType = roomType;}


	public BigDecimal getStandardPrice() {return standardPrice;}

	public void setStandardPrice(BigDecimal standardPrice) {this.standardPrice = standardPrice;}


	public BigDecimal getDiscountPrice() {return discountPrice;}

	public void setDiscountPrice(BigDecimal discountPrice) {this.discountPrice = discountPrice;}


	public BigDecimal getDeposit() {return deposit;}

	public void setDeposit(BigDecimal deposit) {this.deposit = deposit;}


	public String getPersonName() {return personName;}

	public void setPersonName(String personName) {this.personName = personName;}


	public String getCertificateCategory() {return certificateCategory;}

	public void setCertificateCategory(String certificateCategory) {this.certificateCategory = certificateCategory;}


	public String getCertificateNumber() {return certificateNumber;}

	public void setCertificateNumber(String certificateNumber) {this.certificateNumber = certificateNumber;}


	public String getPhoneNumber() {return phoneNumber;}

	public void setPhoneNumber(String phoneNumber) {this.phoneNumber = phoneNumber;}


	public Date getArriveTime() {return arriveTime;}

	public void setArriveTime(Date arriveTime) {this.arriveTime = arriveTime;}


	public Date getLeaveTime() {return leaveTime;}

	public void setLeaveTime(Date leaveTime) {this.leaveTime = leaveTime;}


	public Integer getNumberOfOccupants() {return numberOfOccupants;}

	public void setNumberOfOccupants(Integer numberOfOccupants) {this.numberOfOccupants = numberOfOccupants;}


	public String getOperator() {return operator;}

	public void setOperator(String operator) {this.operator = operator;}


	public Integer getVipId() {return vipId;}

	public void setVipId(Integer vipId) {this.vipId = vipId;}


	public BigDecimal getVipPrice() {return vipPrice;}

	public void setVipPrice(BigDecimal vipPrice) {this.vipPrice = vipPrice;}


	public Boolean getBreakfast() {return breakfast;}

	public void setBreakfast(Boolean breakfast) {this.breakfast = breakfast;}


	public Boolean getWakeUp() {return wakeUp;}

	public void setWakeUp(Boolean wakeUp) {this.wakeUp = wakeUp;}


	public String getRemark() {return remark;}

	public void setRemark(String remark) {this.remark = remark;}


	@Override
	public String toString() {
		return "Checkininfos{" +
				"id='" + id + '\'' +
				"roomNumber='" + roomNumber + '\'' +
				"roomType='" + roomType + '\'' +
				"standardPrice='" + standardPrice + '\'' +
				"discountPrice='" + discountPrice + '\'' +
				"deposit='" + deposit + '\'' +
				"personName='" + personName + '\'' +
				"certificateCategory='" + certificateCategory + '\'' +
				"certificateNumber='" + certificateNumber + '\'' +
				"phoneNumber='" + phoneNumber + '\'' +
				"arriveTime='" + arriveTime + '\'' +
				"leaveTime='" + leaveTime + '\'' +
				"numberOfOccupants='" + numberOfOccupants + '\'' +
				"operator='" + operator + '\'' +
				"vipId='" + vipId + '\'' +
				"vipPrice='" + vipPrice + '\'' +
				"breakfast='" + breakfast + '\'' +
				"wakeUp='" + wakeUp + '\'' +
				"remark='" + remark + '\'' +
				'}';
	}
}

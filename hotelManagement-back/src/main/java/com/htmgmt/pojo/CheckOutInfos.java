package com.htmgmt.pojo;

import java.math.BigDecimal;

public class CheckOutInfos {
	private Integer id;
	private Integer roomNumber;
	private BigDecimal discountPrice;
	private BigDecimal deposit;
	private Integer days;
	private BigDecimal totalRoomPrice;
	private BigDecimal goodsCost;
	private BigDecimal foodCost;
	private BigDecimal phoneCost;
	private BigDecimal actualReceivable;
	private BigDecimal refundableDeposit;
	private String paymentMethod;
	private BigDecimal paidIn;
	private BigDecimal change;
	private String operator;
	private String remark;

	public CheckOutInfos() {}

	public Integer getId() {return id;}

	public void setId(Integer id) {this.id = id;}


	public Integer getRoomNumber() {return roomNumber;}

	public void setRoomNumber(Integer roomNumber) {this.roomNumber = roomNumber;}


	public BigDecimal getDiscountPrice() {return discountPrice;}

	public void setDiscountPrice(BigDecimal discountPrice) {this.discountPrice = discountPrice;}


	public BigDecimal getDeposit() {return deposit;}

	public void setDeposit(BigDecimal deposit) {this.deposit = deposit;}


	public Integer getDays() {return days;}

	public void setDays(Integer days) {this.days = days;}


	public BigDecimal getTotalRoomPrice() {return totalRoomPrice;}

	public void setTotalRoomPrice(BigDecimal totalRoomPrice) {this.totalRoomPrice = totalRoomPrice;}


	public BigDecimal getGoodsCost() {return goodsCost;}

	public void setGoodsCost(BigDecimal goodsCost) {this.goodsCost = goodsCost;}


	public BigDecimal getFoodCost() {return foodCost;}

	public void setFoodCost(BigDecimal foodCost) {this.foodCost = foodCost;}


	public BigDecimal getPhoneCost() {return phoneCost;}

	public void setPhoneCost(BigDecimal phoneCost) {this.phoneCost = phoneCost;}


	public BigDecimal getActualReceivable() {return actualReceivable;}

	public void setActualReceivable(BigDecimal actualReceivable) {this.actualReceivable = actualReceivable;}


	public BigDecimal getRefundableDeposit() {return refundableDeposit;}

	public void setRefundableDeposit(BigDecimal refundableDeposit) {this.refundableDeposit = refundableDeposit;}


	public String getPaymentMethod() {return paymentMethod;}

	public void setPaymentMethod(String paymentMethod) {this.paymentMethod = paymentMethod;}


	public BigDecimal getPaidIn() {return paidIn;}

	public void setPaidIn(BigDecimal paidIn) {this.paidIn = paidIn;}


	public BigDecimal getChange() {return change;}

	public void setChange(BigDecimal change) {this.change = change;}


	public String getOperator() {return operator;}

	public void setOperator(String operator) {this.operator = operator;}


	public String getRemark() {return remark;}

	public void setRemark(String remark) {this.remark = remark;}


	@Override
	public String toString() {
		return "CheckOutInfos{" +
				"id='" + id + '\'' +
				"roomNumber='" + roomNumber + '\'' +
				"discountPrice='" + discountPrice + '\'' +
				"deposit='" + deposit + '\'' +
				"days='" + days + '\'' +
				"totalRoomPrice='" + totalRoomPrice + '\'' +
				"goodsCost='" + goodsCost + '\'' +
				"foodCost='" + foodCost + '\'' +
				"phoneCost='" + phoneCost + '\'' +
				"actualReceivable='" + actualReceivable + '\'' +
				"refundableDeposit='" + refundableDeposit + '\'' +
				"paymentMethod='" + paymentMethod + '\'' +
				"paidIn='" + paidIn + '\'' +
				"change='" + change + '\'' +
				"operator='" + operator + '\'' +
				"remark='" + remark + '\'' +
				'}';
	}
}

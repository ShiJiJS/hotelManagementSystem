package com.htmgmt.pojo;

import java.math.BigDecimal;

public class Goods {
    private Integer id;
    private String name;
    private String type;
    private BigDecimal price;
    private String unit;
    private String remark;

    public Goods() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }


    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }


    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }


    @Override
    public String toString() {
        return "Goods{" +
                "id='" + id + '\'' +
                "name='" + name + '\'' +
                "type='" + type + '\'' +
                "price='" + price + '\'' +
                "unit='" + unit + '\'' +
                "remark='" + remark + '\'' +
                '}';
    }
}

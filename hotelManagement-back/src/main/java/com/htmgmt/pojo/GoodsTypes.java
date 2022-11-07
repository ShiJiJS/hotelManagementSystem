package com.htmgmt.pojo;

public class GoodsTypes {
    private Integer id;
    private String name;
    private String remark;

    public GoodsTypes() {
    }

    public GoodsTypes(Integer id, String name, String remark) {
        this.id = id;
        this.name = name;
        this.remark = remark;
    }

    public Integer getId() {return id;}

    public void setId(Integer id) {this.id = id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getRemark() {return remark;}

    public void setRemark(String remark) {this.remark = remark;}

    @Override
    public String toString() {
        return "GoodsTypes{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", remark='" + remark + '\'' +
                '}';
    }
}

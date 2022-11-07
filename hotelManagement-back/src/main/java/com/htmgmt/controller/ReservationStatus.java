package com.htmgmt.controller;

public enum ReservationStatus {
        NORMAL("正常"),
        STAYED("已入住"),
        CANCELLED("已取消");
        //属性
        private final String name;

        //构造器
        private ReservationStatus (String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
}

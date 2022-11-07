package com.htmgmt.controller;

public enum RoomStatus {
        RESERVED("预定"),
        OCCUPIED("入住"),
        VACANT("空房");
        //属性
        private final String name;

        //构造器
        private RoomStatus(String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
}

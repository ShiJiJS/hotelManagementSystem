package com.htmgmt.controller;

public enum MembershipStatus {
        STANDARD("普通"),
        VIP("VIP");
        //属性
        private final String name;

        //构造器
        private MembershipStatus(String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
}

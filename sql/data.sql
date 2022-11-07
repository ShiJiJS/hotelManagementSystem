CREATE DATABASE IF NOT EXISTS hotelManagement;

USE hotelManagement;

/*建表*/
/*roomType*/
CREATE TABLE IF NOT EXISTS `roomTypes`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`type` VARCHAR(20),
	`numberOfPerson` INT,
	remark VARCHAR(80)
);

/*floor*/
CREATE TABLE IF NOT EXISTS `floors`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20),
	remark VARCHAR(80)
);

/*goodsTypes*/
CREATE TABLE IF NOT EXISTS `goodsTypes`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20),
	remark VARCHAR(80)
);
/*goods*/
CREATE TABLE IF NOT EXISTS `goods`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(30),
	`type` VARCHAR(30),
	price DECIMAL(8,2),
	unit  VARCHAR(30),
	remark VARCHAR(80)
);

/*vip*/
CREATE TABLE IF NOT EXISTS `vips`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(30),
	gender VARCHAR(10),
	`password` VARCHAR(30),
	phoneNumber VARCHAR(30),
	address VARCHAR(50),
	email VARCHAR(40),
	mark INT,
	`level` VARCHAR(10),
	latestCheckInTime DATETIME,
	latestReserveTime DATETIME,
	remark VARCHAR(80)
);



/*user*/
CREATE TABLE IF NOT EXISTS `users`(
	id INT PRIMARY KEY,
	userName VARCHAR(30),
	`password` VARCHAR(30),
	`type` VARCHAR(30),
	remark VARCHAR(80)	
);

/*log*/
CREATE TABLE IF NOT EXISTS `logs`(
	userName VARCHAR(30),
	operation VARCHAR(20),
	`time` DATETIME,
	remark VARCHAR(80),
	PRIMARY KEY(username,operation,`time`)
);

/*room*/
CREATE TABLE IF NOT EXISTS `rooms`(
	id INT PRIMARY KEY,
	`type` VARCHAR(20),
	`status` VARCHAR(10),
	`floor` VARCHAR(20),
	standardPrice DECIMAL(10,2),
	discountPrice DECIMAL(10,2),
	standardUserPrice DECIMAL(10,2),
	vipUserPrice DECIMAL(10,2),
	remark VARCHAR(80)
);

/*reservation*/
CREATE TABLE IF NOT EXISTS `reservations`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	roomNumber INT,
	roomType VARCHAR(20),
	standardPrice DECIMAL(10,2),
	discountPrice DECIMAL(10,2),
	deposit DECIMAL(10,2),
	personName VARCHAR(30),
	certificateCategory VARCHAR(20),
	certificateNumber VARCHAR(40),
	phoneNumber VARCHAR(30),
	arriveTime DATETIME,
	leaveTime DATETIME,
	numberOfOccupants INT,
	operator VARCHAR(30),
	vipId INT,
	vipPrice DECIMAL(10,2),
	reservationStatus VARCHAR(20),
	remark VARCHAR(80)
);

/*checkInInfo*/
CREATE TABLE IF NOT EXISTS `checkInInfos`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	roomNumber INT,
	roomType VARCHAR(20),
	standardPrice DECIMAL(10,2),
	discountPrice DECIMAL(10,2),
	deposit DECIMAL(10,2),
	personName VARCHAR(30),
	certificateCategory VARCHAR(20),
	certificateNumber VARCHAR(40),
	phoneNumber VARCHAR(30),
	arriveTime DATETIME,
	leaveTime DATETIME,
	numberOfOccupants INT,
	operator VARCHAR(30),
	vipId INT,
	vipPrice DECIMAL(10,2),
	breakfast BOOLEAN,
	wakeUp BOOLEAN,
	remark VARCHAR(80)
);

	/*roomChangeInfo*/
CREATE TABLE IF NOT EXISTS roomChangeInfos (
	id INT PRIMARY KEY,
	originalRoomNumber INT,
	afterRoomNumber INT,
	roomType VARCHAR(20),
	standardPrice DECIMAL(10,2),
	discountPrice DECIMAL(10,2),
	deposit DECIMAL(10,2),
	personName VARCHAR(30),
	certificateCategory VARCHAR(20),
	certificateNumber VARCHAR(40),
	phoneNumber VARCHAR(30),
	arriveTime DATETIME,
	leaveTime DATETIME,
	numberOfOccupants INT,
	operator VARCHAR(30),
	vipId INT,
	vipPrice DECIMAL(10,2),
	breakfast BOOLEAN,
	wakeUp BOOLEAN,
	remark VARCHAR(80)
);

/*checkOutInfo*/
CREATE TABLE IF NOT EXISTS checkOutInfos (
	id INT PRIMARY KEY,
	roomNumber INT,
	discountPrice DECIMAL(10,2),
	deposit DECIMAL(10,2),
	days INT,
	totalRoomPrice DECIMAL(10,2),
	goodsCost DECIMAL(10,2),
	foodCost DECIMAL(10,2),
	phoneCost DECIMAL(10,2),
	actualReceivable DECIMAL(10,2),
	refundableDeposit DECIMAL(10,2),
	paymentMethod VARCHAR(20),
	paidIn DECIMAL(10,2),
	`change` DECIMAL(10,2),
	operator VARCHAR(30),
	remark VARCHAR(80)
);


/*consumption 船新版本*/
CREATE TABLE IF NOT EXISTS consumptions(
	id INT PRIMARY KEY AUTO_INCREMENT,
	checkInId INT,
	roomId INT,
	totalPrice DECIMAL(10,2),
	operator VARCHAR(30),
	`time` DATETIME
);

/*consumptionDetails*/
CREATE TABLE IF NOT EXISTS consumptionDetails(
	id INT PRIMARY KEY AUTO_INCREMENT,
	goodsName VARCHAR(30),
	`count` INT,
	unitPrice DECIMAL(10,2),
	consumePrice DECIMAL(10,2),
	discountRate DECIMAL(3,2),
	discountPrice DECIMAL(10,2),
	consumptionId INT
);




/*修改自增起始值*/
ALTER TABLE `floors` AUTO_INCREMENT=10000;
ALTER TABLE `goodsTypes` AUTO_INCREMENT=10000;
ALTER TABLE `goods` AUTO_INCREMENT=10000;
ALTER TABLE `vips` AUTO_INCREMENT=10000;
ALTER TABLE `reservations` AUTO_INCREMENT=10000;
ALTER TABLE `checkInInfos` AUTO_INCREMENT=10000;
ALTER TABLE `consumptions` AUTO_INCREMENT=10000;
ALTER TABLE `consumptionDetails` AUTO_INCREMENT=10000;


/*测试数据*/
INSERT INTO `roomTypes` (`type`,numberOfPerson,remark)VALUES 
('双人间',2,''),
('单人间',1,''),
('四人间',4,''),
('钟点房',2,''),
('总统套房',4,'有亿点点贵');

INSERT INTO `floors` (`name`,remark)
VALUES
('一楼',''),
('二楼',''),
('三楼','有点高');

INSERT INTO `goodsTypes` (`name`,remark)
VALUES('饮料',''),
('酒水','未成年不得购买'),
('食品','');

INSERT INTO `goods` (`name`,`type`,price,unit,remark)
VALUES('可口可乐','饮料',3.5,'瓶',''),
('士力架','食品',5,'条',''),
('雪花啤酒','酒水',5,'罐','未成年不得购买');

INSERT INTO vips (`name`,gender,`password`,phoneNumber,address,email,
			mark,`level`,latestCheckInTime,latestReserveTime,remark)
VALUES
('vipZhang','男','123456','11322211221','TaiYangXiDiQiu','vipZhang@xxx.com',
300,'vip','2022-8-19 13:20:33','2022-8-20 15:33:22',''),
('puTongWang','女','123156','112222344121','TaiYangXiDiQiu','puTongWang@xxx.com',
100,'vip','2022-8-12 13:10:33','2022-8-13 12:33:12','');

INSERT INTO `users`VALUES
(10000,'guanliyuanWang','123456','管理员',''),
(10001,'jingliZhang','654321','经理',''),
(10002,'qiantaiLiu','123456','前台人员','');

INSERT INTO `rooms` VALUES
(101,'双人间','空房','一楼',400,350,350,350,''),
(201,'四人间','空房','二楼',600,550,550,550,''),
(301,'单人间','空房','三楼',300,250,250,250,''),
(302,'双人间','空房','三楼',600,550,550,550,'');

SELECT * FROM `users`;
SELECT * FROM roomTypes;
SELECT * FROM floors;
SELECT * FROM goodsTypes;
SELECT * FROM goods;
SELECT * FROM vips;
SELECT * FROM rooms;
SELECT * FROM consumptions;
SELECT * FROM consumptionDetails;
SELECT * FROM reservations;


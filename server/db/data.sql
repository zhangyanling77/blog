CREATE TABLE IF NOT EXISTS `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test` varchar(255) DEFAULT 'test',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `test1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_id` char(10) NOT NULL,
  `nick` char(10) NOT NULL,
  `department` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test` varchar(255) DEFAULT 'wangcaowei',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `test` (`id`,`test`) VALUES (1,'test');
INSERT INTO `test` (`id`,`test`) VALUES (2,'test');
INSERT INTO `test` (`id`,`test`) VALUES (3,'test');
INSERT INTO `test` (`id`,`test`) VALUES (4,'test');
INSERT INTO `test` (`id`,`test`) VALUES (5,'test');
INSERT INTO `test` (`id`,`test`) VALUES (6,'test');
INSERT INTO `test` (`id`,`test`) VALUES (7,'test');
INSERT INTO `test` (`id`,`test`) VALUES (8,'test');
INSERT INTO `test` (`id`,`test`) VALUES (9,'test');
INSERT INTO `test` (`id`,`test`) VALUES (10,'test');
INSERT INTO `test` (`id`,`test`) VALUES (11,'test');
INSERT INTO `test` (`id`,`test`) VALUES (12,'test');
INSERT INTO `test` (`id`,`test`) VALUES (13,'test');
INSERT INTO `test` (`id`,`test`) VALUES (14,'test');
INSERT INTO `test` (`id`,`test`) VALUES (15,'test');
INSERT INTO `test` (`id`,`test`) VALUES (16,'test');
INSERT INTO `test` (`id`,`test`) VALUES (17,'test');
INSERT INTO `test` (`id`,`test`) VALUES (18,'test');
INSERT INTO `test` (`id`,`test`) VALUES (19,'test');
INSERT INTO `test` (`id`,`test`) VALUES (20,'test');
INSERT INTO `test` (`id`,`test`) VALUES (21,'test');

INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (1,'1','小红','技术部');
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (2,'1','小红','技术部');
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (3,'1','小红','技术部');
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (4,'1','小红','技术部');
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (5,'1','小红','技术部');
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (6,'1','小红',NULL);
INSERT INTO `test1` (`id`,`emp_id`,`nick`,`department`) VALUES (7,'1','小红',NULL);

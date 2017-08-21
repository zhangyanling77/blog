CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` longtext NOT NULL COMMENT '内容',
  `createTime` datetime NOT NULL COMMENT '文章创建时间',
  `updateTime` datetime NOT NULL COMMENT '最近更新时间',
  `userid` int(11) NOT NULL COMMENT '关联用户id',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `article_user_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `articletagrelate` (
  `articleid` int(11) NOT NULL COMMENT '文章id',
  `tagid` int(11) NOT NULL COMMENT '标签id',
  KEY `tagid` (`tagid`),
  KEY `articleid` (`articleid`),
  CONSTRAINT `article_fk` FOREIGN KEY (`articleid`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_fk` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `articles` (`id`,`title`,`content`,`createTime`,`updateTime`,`userid`) VALUES (1,'test','test','2017-08-21 21:54:02.000','2017-08-21 21:54:04.000',1);
INSERT INTO `articles` (`id`,`title`,`content`,`createTime`,`updateTime`,`userid`) VALUES (2,'test1','test1','2017-08-21 22:42:05.000','2017-08-21 22:42:08.000',1);



INSERT INTO `tags` (`id`,`tag`) VALUES (1,'javascript');
INSERT INTO `tags` (`id`,`tag`) VALUES (2,'react');
INSERT INTO `tags` (`id`,`tag`) VALUES (3,'vue');
INSERT INTO `tags` (`id`,`tag`) VALUES (4,'angular');
INSERT INTO `tags` (`id`,`tag`) VALUES (5,'nodejs');
INSERT INTO `tags` (`id`,`tag`) VALUES (6,'mysql');
INSERT INTO `tags` (`id`,`tag`) VALUES (7,'mongodb');

INSERT INTO `users` (`id`,`username`,`password`) VALUES (1,'admin','123');
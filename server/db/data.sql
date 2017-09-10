-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: koatest
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` longtext NOT NULL COMMENT '内容',
  `createTime` datetime DEFAULT NULL COMMENT '文章创建时间',
  `updateTime` datetime NOT NULL COMMENT '最近更新时间',
  `userid` int(11) NOT NULL COMMENT '关联用户id',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `article_user_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'test','test','2017-08-21 21:54:02','2017-08-21 21:54:04',1),(2,'test1','test1','2017-08-21 22:42:05','2017-08-21 22:42:08',1),(3,'123','123',NULL,'2017-09-05 14:18:37',1),(4,'123','123',NULL,'2017-09-05 14:44:14',1),(5,'123','123',NULL,'2017-09-05 14:44:45',1),(6,'123','123',NULL,'2017-09-05 14:50:34',1),(7,'123','123',NULL,'2017-09-05 14:51:19',1),(8,'123','123',NULL,'2017-09-05 14:53:42',1),(9,'123','123',NULL,'2017-09-05 14:59:06',1),(10,'123','123',NULL,'2017-09-05 15:00:05',1),(11,'123','123',NULL,'2017-09-05 15:02:15',1),(12,'123','123',NULL,'2017-09-05 15:05:58',1),(13,'123','123',NULL,'2017-09-05 15:46:00',1),(14,'test','<p>testtest</p>',NULL,'2017-09-05 16:05:14',1),(15,'fdsf','<p>fds</p>','2017-09-05 16:29:34','2017-09-05 16:29:34',1),(16,'fdsaffdsa','<p>fdsaf</p>','2017-09-05 16:30:20','2017-09-05 16:30:20',1),(17,'fdsaffdsa','<p>fdsaf</p>','2017-09-05 16:30:36','2017-09-05 16:30:36',1),(18,'kfds','<p>fads</p>','2017-09-05 16:31:12','2017-09-05 16:31:12',1),(19,'fd','<p>fd</p>','2017-09-05 16:32:02','2017-09-05 16:32:02',1),(20,'123','<p>123</p>','2017-09-06 14:53:42','2017-09-06 14:53:42',1),(21,'111','<p>111</p>','2017-09-06 15:03:11','2017-09-06 15:03:11',1),(22,'222','<p>222</p>','2017-09-06 15:04:18','2017-09-06 15:04:18',1),(23,'123','<p>123</p>','2017-09-06 15:13:07','2017-09-06 15:13:07',1),(24,'wwwww','<p>wwwww</p>','2017-09-06 17:32:48','2017-09-06 17:32:48',1),(25,'111','<p>111</p>','2017-09-10 06:38:24','2017-09-10 06:38:24',1),(26,'123','<p>123</p>','2017-09-10 07:12:21','2017-09-10 07:12:21',1),(27,'1213','<p>1313123</p>','2017-09-10 07:14:19','2017-09-10 07:14:19',1),(28,'1213','<p>1313123</p>','2017-09-10 07:15:07','2017-09-10 07:15:07',1),(29,'1213','<p>1313123</p>','2017-09-10 07:15:44','2017-09-10 07:15:44',1),(30,'1213','<p>1313123</p>','2017-09-10 07:16:01','2017-09-10 07:16:01',1),(31,'1213','<p>1313123</p>','2017-09-10 07:16:33','2017-09-10 07:16:33',1),(32,'1213','<p>1313123</p>','2017-09-10 07:16:52','2017-09-10 07:16:52',1);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articletagrelate`
--

DROP TABLE IF EXISTS `articletagrelate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articletagrelate` (
  `articleid` int(11) NOT NULL COMMENT '文章id',
  `tagid` int(11) NOT NULL COMMENT '标签id',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  PRIMARY KEY (`id`),
  KEY `articleid` (`articleid`),
  KEY `tagid` (`tagid`),
  CONSTRAINT `article_fk` FOREIGN KEY (`articleid`) REFERENCES `articles` (`id`),
  CONSTRAINT `tag_fk` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articletagrelate`
--

LOCK TABLES `articletagrelate` WRITE;
/*!40000 ALTER TABLE `articletagrelate` DISABLE KEYS */;
/*!40000 ALTER TABLE `articletagrelate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'javascript'),(2,'react'),(3,'vue'),(4,'angular'),(5,'nodejs'),(6,'mysql'),(7,'mongodb');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-10 15:28:13

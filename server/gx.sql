SET NAMES UTF8;
DROP DATABASE IF EXISTS gx;
CREATE DATABASE gx CHARSET=UTF8;
USE gx;

/**用户信息**/
CREATE TABLE gx_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
/**用户信息**/
INSERT INTO gx_user VALUES
(NULL, '第一用户tom', '123456'),
(NULL, '第二用户lili', '123456');

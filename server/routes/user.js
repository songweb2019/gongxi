const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
 
//用户登陆 post
router.post("/login",(req,res)=>{
	//接收验证数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库
	var sql="select * from gx_user where "
	+"uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登陆成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});

//用户注册
router.get('/reg',function(req,res){
  //获取get请求的数据
  var obj=req.query;
  //检测值是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //执行SQL语句
  pool.query('INSERT INTO gx_user SET ?',[obj],function(err,result){
    if(err) throw err;
  console.log(result);
	//判断是否注册成功
    if(result.affectedRows>0){
	  res.send({code:200,msg:'reg suc'});
	}
  });
});

//导出路由器对象
module.exports=router;
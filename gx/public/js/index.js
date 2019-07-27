//当窗口的内容都加载完成之后才查找按钮绑定事件
//$(window).load(function(){...})
//$(window).on("load",function(){ ... }) == $(window).load(function(){...})
// $(document).ready(function(){ ... })  == $(function(){ ... })
$(function(){
  //DOM四步
   //1.查找触发事件的元素  
   //2.绑定事件处理函数
   //3.查找要修改的元素    
   //4.修改元素

  //单击事件
  //点击小图片显示大图片 
  $(".logoimg").click(function(){
    $(".hidelogo").show()
  })
  //点击大图片隐藏
  $(".lglogoimg").click(function(){
    $(".hidelogo").hide()
  })
  //导航 点击切换默认样式
  $("#tab li .taba").click(function(e){
    //阻止事件默认行为
    e.stopPropagation();
           //给自己的爹+active           //给爹的所有兄弟去掉active 
    $(this).parent().addClass("active").siblings().removeClass("active")
 })
 //点击导航1 显示 主页1  
 $(".appzip").click(function(e){
   e.stopPropagation();
   $("#cont1").show().siblings().hide()
 })
 //点击导航2 显示 主页2 
 $(".aboutme").click(function(e){
   e.stopPropagation();
   $("#cont2").show().siblings().hide()
 })

  //cont1 点击扫描二维码出现图片
  $("#cont1Ewm").click(function(){
    $("#appImg").show()
  })
  $("#appImg").click(function(){
    $("#appImg").hide()
  })





})
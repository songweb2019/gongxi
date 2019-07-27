  //content1 banner轮播
  //1.
  var i=0;//现在正在显示第几张图片，从0开始
  var LIWIDTH=200;//每个li的固定宽度
  var DURATION=500;//每次轮播动画持续的时间
  var LICOUNT=4;//li的总个数
  var ulImgs=document.getElementById("ul-imgs"); //要移动的ul
  var ulIdxs=document.getElementById("ul-idxs");//包含小圆点列表的ul
  var lis=ulIdxs.children;  //小圆点的元素列表
  //从当前位置移动到任意一个范围内的位置
  function moveTo(to){
    //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
    if(to==undefined){
      to=i+1;
    }
    if(i==0){//如果滚动从头开始，再重新加上transition
      ulImgs.className="transition";
    }
    i=to;//先将表示第几张图片的变量i变为目标位置
    //再用i计算ulimgs的marginLeft距离
    ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    //先删除所有小圆点的class
    for(var li of lis){
      li.className=""
    }
    if(i==LICOUNT){
      i=0;
      //当transition动画播放完之后，才
      setTimeout(function(){
        ulImgs.className="";//清掉transition属性
        ulImgs.style.marginLeft=0;//将ulImgs拉回0位置
      },DURATION)
    }
    //再给当前位置的小圆点添加class active
    lis[i].className="active";
  }

  //2.
  var btnLeft=document.getElementById("btn-left");
  var btnRight=document.getElementById("btn-right");
  //用开关，控制，上次动画没有播放完，下次动画不能开始！
  var canClick=true;
  btnRight.onclick=function(){
     //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
    move(1)
  }
  //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
  function move(n){
    if(canClick){//只有可以单击时
      //console.log(i+n);
      moveTo(i+n);//才调用真正移动ul的方法
      canClick=false;//马上把开关关上，禁止再次点击
      //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
      setTimeout(function(){
        canClick=true;
      },DURATION+100);
    }
  }
  btnLeft.onclick=function(){
    move(-1);
  }

//3.
  var interval=3000;//每次轮播之间间隔3秒
  var timer=setInterval(function(){
    moveTo()
  },3000);
  var banner=document.getElementById("banner");
  banner.onmouseover=function(){
    clearInterval(timer);
  }
  banner.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },3000);
  }
  
//4.
  var ulIdxs=document.getElementById("ul-idxs");
  var canClick=true;
  ulIdxs.onclick=function(e){
    if(canClick){
      var li=e.target;
      if(li.nodeName=="LI"){
        if(li.className!=="active"){
          for(var i=0;i<lis.length;i++){
            if(lis[i]==li){
              break;
            }
          }
          moveTo(i);
          setTimeout(function(){
            canClick=true;
          },DURATION);
        }
      }
    }
  }
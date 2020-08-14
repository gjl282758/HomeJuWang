
//注册事件
//鼠标移入事件
share.addEventListener('mouseover',function(){
    startMove(share,{left:0},300,'linear');
})
// 鼠标移出事件
share.addEventListener('mouseout',function(){
    // //obj:运动对象，json：运动属性json格式，times：运动时间（不能大于间隔时间），fx：运动形式，fn：回掉函数
    startMove(share,{left:-50},300,'linear');
})
   
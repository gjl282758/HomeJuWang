/* 
            需求： 点击登录按钮，显示登录界面
*/
// 获取登陆账号对象
let zhdenglu = document.getElementById('zhdenglu');
zhdenglu.addEventListener('click', function () {
    denglu.style.display = 'block';
});

let denglu = document.getElementById('denglu');
// let dw = parseInt((document.documentElement.clientWidth - denglu.offsetWidth) / 2);
// console.log(dw);
let dh = parseInt((document.documentElement.clientHeight - denglu.offsetHeight) / 2);
// denglu.style.left = dw + 'px';
// denglu.style.top = dh + 'px';
//设置登录一直显示在中间
window.addEventListener('scroll', function () {
    // 获取滚动条到顶部的距离
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 执行动画
    startMove(denglu, { top: dh + sTop-100 + 'px' }, 500, 'linear');
})

//点击X关闭登陆界面
X.addEventListener('click',function(){
    denglu.style.display='none';
})

//获取所有li对象
let lis = document.querySelectorAll('#banner  li');
// console.log(lis)

// 在li后面复制第一个li
bannerbox.appendChild(lis[0].cloneNode(true));

// 设置ul动态宽度
bannerbox.style.width = lis[0].offsetWidth * (lis.length + 1) + 'px';

// 设置储存变量
let index = 0;

// 开启时间
let timeId = setInterval(function () {
    index++;//自增
    startMove(bannerbox, { left: -1920 * index }, 600, 'elasticIn', function () {
        if (index == lis.length) {
            index = 0;
            // 迅速回到第一个
            bannerbox.style.left = 0;
        }
    })

}, 2000)








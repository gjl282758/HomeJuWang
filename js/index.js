
    //注册事件
    let a=document.querySelectorAll('#qqbar a');
        // console.log(a);
        let span=document.querySelectorAll('#qqbar a span');
   
        
        for(let i=0;i<a.length;i++){
            // 鼠标移入事件
            a[i].onmouseover=function(){
               /*  alert(111) */
            a[i].style=`
            background-position-x: -50px ;
            `;
            span[i].style=`
            display:block
            `;
            // 鼠标移出事件
            a[i].onmouseout=function(){
                //  alert(111)
             a[i].style=`
             background-position-x: 0 ;
             `;
             span[i].style=`
             display:none
             `;}
        }
    }
    // 功能一：当滚动条高度大于500时，显示侧栏，小于500时，隐藏。
    window.addEventListener('scroll',function(){
        let sTop=document.documentElement.scrollTop ||document.body.scrollTop;
        if(sTop>500){
            qqbar.style.display='block';
        }else{
            qqbar.style.display='none';
        }
    })
    // 功能二：点击返回顶部，滚动条在500毫秒内缓慢返回顶部
    // 获取返回顶部，给返回顶部注册事件
    
    let bartop=document.querySelectorAll('#qqbar .bartop');
    console.log(bartop);
    bartop[0].onclick=function(){
        // alert(111);
             // 开启定时器
             let timeId=setInterval(function(){
                // 获取滚动条总长度
                let sTop=document.documentElement.scrollTop ||document.body.scrollTop;
                // 设置总时间
                let alltime=500;
                // 设置速度变量
                let v=sTop/500;
                document.documentElement.scrollTop=sTop-v*40;
                document.body.scrollTop=sTop-v*40;
                if(sTop<=0){
                    clearInterval(timeId);
                }
                console.log(sTop);
            },40)
    }
    // bartop[0].addEventListener=('click',function(){
    //     alert(bartop[0]);
        // 开启定时器
        // let timeId=setInterval(function(){
        //     // 获取滚动条总长度
        //     let sTop=document.documentElement.scrollTop ||document.body.scrollTop;
        //     // 设置总时间
        //     let alltime=500;
        //     // 设置速度变量
        //     let v=sTop/500;
        //     document.documentElement.scrollTop=sTop-v*40;
        //     document.body.scrollTop=sTop-v*40;
        //     if(sTop<=0){
        //         clearInterval(timeId);
        //     }
        //     console.log(sTop);
        // },40)
        

    // });


/**
 * Created by wangZhi on 2016/6/13.
 */
/*district select start*/
function districtSelect(){
    var spanDom = $('div.title span');
    //district iconRotate
    $('.district li').hover(function () {
        //add rotateStyle
        $('div.title i').addClass('rotate');
    },function(){
        $('div.title i').removeClass('rotate');
    });
    $('div.select ul li').click(function () {
        //.text();返回元素内容
        var thisText = $(this).text();
        $(this).addClass('sel').siblings().removeClass('sel');
        spanDom.text(thisText);
    });
}
/*district select end*/
/*shortcut start*/
function shortCut() {
    $('.shortcut li.icon').hover(function () {
        $(this).find('i').addClass('rotate');
        $(this).css({'background': 'white'});
    },function() {
        $(this).find('i').removeClass('rotate');
        $(this).css({'background': ''});
    });
}
/*shortcut end*/
/*advertisement start*/
function advertisement() {
    $('.bannerTop a').click(function () {
        $('.bannerTop').hide();
    });
}
/*advertisement end*/
/*focus and blur start*/
function focusBlur() {
    /*创建oText变量，通过id名获取文本输入框赋值给变量oText*/
    var oText = document.getElementById('text');
    /*.onfocus：鼠标获取焦点事件 给输入框添加一个鼠标获取焦点事件*/
    oText.onfocus = function () {
        this.setAttribute('placeholder', '');
    };
    /*.onblur：鼠标失去焦点事件 给输入框添加一个鼠标失去焦点事件*/
    oText.onblur = function() {
        this.setAttribute('placeholder', '618-大折扣');
    };
}
/*focus and blur end*/
/*二级导航切换 start*/
function subNavSwitch() {
    var _index = 0;
    $(".sel-dd").hover(function(){
        $(".sel-dd .content").show();
    },function(){
        $(".sel-dd .title ul li").removeClass("hover");
        $(".sel-dd .content").hide();
    });
    $(".sel-dd .title ul li").hover(function(){
        _index = $(this).index();
        console.log(_index);
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".sel-dd .content ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
    });
}
/*二级导航切换 end*/
/*轮播图 start*/
function autoBanner() {
    //鼠标触发轮播图区域，显示左右切换按钮
    $(".full-column .banner").hover(function(){
        $(".banner .but").show();
    },function(){
        $(".banner .but").hide();
    });

    //轮播图,上一张
    var bannerIndex = 0;
    $(".banner .but a.prev").click(function(){
        console.log("上一张");
        bannerIndex--;
        if(bannerIndex<0){
            bannerIndex = 5;
        }
        flash();
    });
    //轮播图，下一张
    $(".banner .but a.next").click(function(){
        console.log("下一张");
        bannerIndex++;
        if(bannerIndex>5){
            bannerIndex = 0;
        }
        flash();
    });
    //轮播图选项卡切换
    $(".banner ul.tab li").hover(function(){
        bannerIndex = $(this).index();
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".banner ul.img li").eq(bannerIndex).addClass("hover").siblings().removeClass("hover");
    });

    function flash(){
        $(".banner ul.img li").eq(bannerIndex).addClass("hover").siblings().removeClass("hover");
        $(".banner ul.tab li").eq(bannerIndex).addClass("hover").siblings().removeClass("hover");
    }
}
/*轮播图 end*/
/*广告区域无缝滚动特效 start*/
function advertiseBanner() {
    //获取无缝轮播按钮区域
    var $bnbut = $(".advertising-brand dl dd div.bran-but");
    //获取无缝轮播按钮
    var $bnprev = $(".advertising-brand dl dd div.bran-but a.prev");
    var $bnnext = $(".advertising-brand dl dd div.bran-but a.next");
    //获取无缝轮播区域
    var $bnbox = $(".advertising-brand dl dd");
    //获取轮播图内容区域
    var $bnul = $(".advertising-brand dl dd ul.img");
    //获取单个图片宽度
    var $bnliWidth = $(".advertising-brand dl dd ul.img li").width();
    //声明点击时间
    var clicktime = 0;
    //声明序列号
    var liIndex = 0;
    $bnbox.hover(function(){
        $bnbut.show();
    },function(){
        $bnbut.hide();
    });
    //左按钮切换特效
    $bnprev.click(function(){
        //console.log("左按钮");
        if(new Date() - clicktime > 500){
            clicktime = new Date();
            if( liIndex == 0){
                $bnul.css("marginLeft",-$bnliWidth*4 + "px");
                liIndex = 4;
            };
            liIndex -- ;
            $bnul.animate({
                marginLeft : - $bnliWidth*liIndex+1 + "px"
            },500);
            console.log(liIndex);
        }
    });
    //右按钮特效
    $bnnext.click(function(){
        console.log("右按钮");
        if(new Date() - clicktime > 500){
            clicktime = new Date();
            liIndex ++;
            console.log(liIndex);
            $bnul.animate({
                marginLeft : -$bnliWidth * liIndex + "px"
            },500,function(){
                if(liIndex == 4){
                    $bnul.css("marginLeft",0);
                    liIndex = 0;
                }
            });
        }
    });
}
/*广告区域无缝滚动特效 end*/
/*产品推送 start*/
//获取点击切换按钮
function productPush() {
    var $likeclick  = $(".push-like-title a");
    //获取图片内容li
    var $likeli = $(".push-like-content ul li");
    //声明一个序列号控制图片
    var likeindex = 0;
    $likeclick.click(function(){
        likeindex++;
        if(likeindex>3){
            likeindex = 0 ;
        }
        $likeli.eq(likeindex).addClass("sel").siblings().removeClass("sel");
    });
}
/*产品推送 end*/
/*选项卡按钮*/
function tabControl( tabLi , tabCon ) {
    //选项卡主体区域 公共序列号
    var otabIndex = 0;
    $(tabLi).hover(function(){
        otabIndex = $(this).index();//切换按钮当前序列号
        /*
         this = li
         this.find 相当于从li里面查找子元素xx
         .parent();返回父元素
         $(this).find("a").addClass("sel") —— 代表当前选中添加选项框
         .parent().siblings()—— 代表站在li角度使用兄弟元素查找方法找到其他没选中li
         */
        $(this).find("a").addClass("sel").parent().siblings().find("a").removeClass("sel");
        $(tabCon).eq(otabIndex).show().siblings().hide();
    });
}
/*产生白光*/
function whiteLight() {
    var otabsidea = $(".tab-control-content .left-side .side-banner a");
    otabsidea.hover(function () {
        $(this).find('i').addClass('i-skew');
    },function() {
        $(this).find('i').removeClass('i-skew');
    });
}
/*无缝轮播*/
function inifinteAutoBanner( tabLi , picUl , banner , btnA ) {
    /*获取按钮的切换区域*/
    var _btn = $('.conLeft-banner .conLeft-banner-btn');
    /*获取图片宽度*/
    var imgWidth = $('.conLeft-banner .conLeft-banner-pic ul li').width();
    /*序列号变量*/
    var index = 0;
    /*定时器变量*/
    var timer = null;
    /*存储一个本地时间*/
    var nowTime = new Date();
    /*选项卡切换轮播*/
    $(tabLi).click(function () {
        index = $(this).index();
        //给当前选中的按钮添加样式
        $(this).addClass('on').siblings().removeClass('on');
        $(picUl).animate({
            marginLeft: - imgWidth * (index + 1 ) + 'px'
        },300);
    });
    /*鼠标移入轮播区域*/
    $(banner).hover(function () {
        _btn.show();
        clearInterval(timer);   //关闭自动轮播
    },function() {
        _btn.hide();
        timer = setInterval(function () {   //打开自动轮播
            index++;
            scoll();
        },3000);
    });
    /*左右点击按钮切换轮播*/
    $(btnA).click(function () {
        if (new Date() -nowTime > 350) { //通过当前点击时间-之前本地时间 时间差判断频率
            nowTime = new Date();   //判断完毕 获取新的时间并且储存 准备下次继续
            var i = $(this).index();
            i ? index++ : index--;
            scoll();
        }
    }).mousedown(function() {
        return false;
    });
    /*自动定时器轮播*/
    timer = setInterval(function(){
        index ++;
        scoll();
    },3000);
    /*图片单元轮播方法*/
    function scoll() {
        //创建一个新的序列号
        var liIndex = index;
        if (liIndex >= $(tabLi).length) {
            liIndex = 0;
        }else if (liIndex < 0) {
            liIndex = $(tabLi).length - 1;
        }
        $(tabLi).eq(liIndex).addClass('on').siblings().removeClass('on');
        $(picUl).animate({
            marginLeft: - imgWidth * (index + 1 ) + 'px'
        },300 , function() {
            if ( index == $(tabLi).length )
            {
                $(picUl).css('marginLeft' , -imgWidth+'px');
                index = 0;
            }
            else if ( index < 0 )
            {
                $(picUl).css('marginLeft' , -imgWidth*($(tabLi).length)+'px');
                index = $(tabLi).length-1;
            }
        });
    }
}
$(function(){


    //intro
    setTimeout(function() {
        $('#intro').fadeOut(900).addClass('hide'); 
    }, 900);

    //header
    $('.header-menu').click(function(){
        $(this).toggleClass('active');
        $('.header-gnb').fadeToggle();
        $('.sub .header-menu>span').toggleClass('change'); 
    });


    //slide 
    var cnt = 0;
    var setId=setTimeId=timeCount=0; 


    autoPlay();
		
    function autoPlay(){
        setId = setInterval(countNextFn,3000);
    }

    function mainNextSlide(z){
        
        if(z==0){
            a=[2,0,1];
        }
        else if(z==1){
            a=[0,1,2];
        }
        else if(z==2){
            a=[1,2,0];
        }
        
        $('.slide').eq(a[0]).css({zIndex:2}).stop().animate({opacity:1},0).animate({opacity:1},0);
        $('.slide').eq(a[1]).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
        $('.slide').eq(a[2]).css({zIndex:1}).stop().animate({opacity:0},0).animate({opacity:0},0);
    }
    function countNextFn(){
        cnt++;
        if(cnt>2){
            cnt=0;
        }
        mainNextSlide(cnt);
    }


});//common.js
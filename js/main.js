$(function(){
// F1
	// 选项卡i背景色
	$('.tabItem a').each(function(i,elem){
		var py = -i*56 +'px';
        $(elem).css('background-position','0 '+py+'');
        $('.tabItem li').eq(i).css('background-position','0 '+py+'');
	});
	// 创建元素
	$('.item').each(function(i,elem){
       	var tabCh = '<img class="itemR" src="'+iImg[i].sr1+'"/><img class="itemL" src="'+iImg[i].sr2+'" alt="'+iImg[i].al+'" />';
        $(elem).html(tabCh);
	});
	// 初始化
	$('.itemL').eq(0).show().animate({left:120,opacity:1},500);
	$('.itemR').eq(0).show().animate({top:130,opacity:1},500);
	// 轮播图
	var n=0,timer='';
	run(0);
    // 选项卡
    $('.tabItem li').each(function(i,elem){
    	$(elem).hoverDelay({
			hoverDuring: 300, 
            outDuring: 300, 
			hoverEvent:function(){
               clearInterval(timer);
		       banner(i);
    	       n=i;
			}
		});
		$('.item').eq(i).mouseover(function(){
			clearInterval(timer);
			n=i;
		});
		$('.tab').mouseout(function(){
			clearInterval(timer);
			run(n);
		});
    });
    function run(k){
		timer =  setInterval(function(){
	      k++;
	      k>5?k=0:k;
	      banner(k);
	    },2000)
	};
	function banner(t){
       var cT = 56*t+30 ;
       $('.tabItem li').removeClass('white');
       $('.itemR').hide().animate({top:160,opacity:0},0);
       $('.itemL').hide().animate({left:200,opacity:0},0);
       //深颜色小方块
       $('.cur').animate({top:cT},10,'linear',function(){
       	   setTimeout(function(){
                $('.tabItem li').eq(t).addClass('white');//变白色
       	   },300);
	   });
       // 设置右边图片的运动
      if(t==0||t==1){
          $('.itemL').eq(t).show().animate({left:120,opacity:1},300);
       }else if(t==2){
           $('.itemL').eq(t).show().animate({left:50,opacity:1},300);
       }else if(t==3){
           $('.itemL').eq(t).show().animate({left:180,opacity:1},300);
       }else if(t==4){
       	    $('.itemL').eq(t).show().animate({left:100,opacity:1},300);
       }else{
           $('.itemL').eq(t).show().animate({left:100,opacity:1},300);
       }
       $('.itemR').eq(t).show().animate({top:130,opacity:1},300);//右边文字的运动
    };
	//点击a
	$('.logo p a').eq(0).click(function(){
		var wH = $('.F1').height();
		$('#F2').css('height',wH);
		$('body,html').animate({"scrollTop":wH},1000);
    });

	// 下载
	$('.download').mouseover(function(){ 
		$('.download img').attr("src","img/download-button2.png")
	}).mouseout(function(){
		$('.download img').attr("src","img/download-button.png")
	});
//F2
	$('.icon img').each(function(i,elem){
		$(elem).mouseover(function(){
		   $(elem).css({'-ms-transform':'scale(1.1) rotate(45deg)', /* IE 9 */
                       '-moz-transform':'scale(1.1) rotate(45deg)', /* Firefox */
                       '-webkit-transform':'scale(1.1) rotate(45deg)', /* Safari and Chrome */
                       '-o-transform':'scale(1.1) rotate(45deg)', /* Opera */
                       'transform':'scale(1.1) rotate(45deg)'});
	    }).mouseout(function(){
	    	$(elem).css({'-ms-transform':'rotate(0deg)', /* IE 9 */
                       '-moz-transform':'rotate(0deg)', /* Firefox */
                       '-webkit-transform':'rotate(0deg)', /* Safari and Chrome */
                       '-o-transform':'rotate(0deg)', /* Opera */
                       'transform':'rotate(0deg)'});
	    });
	});
//滚动页面
	$(window).scroll(function(){
		var iH = $(window).innerHeight()+$(document).scrollTop();
        if(iH>$('.screen').eq(0).offset().top){
         	 $('.tit em').animate({width:490},2000)
         	 function arise(n){
         	 	$('.icon').eq(n).animate({'opacity':1},1000,function(){
                     n++;
                     if($('.icon').eq(n)){
                     	arise(n);
                     }
         	     });
         	 }
         };
         setTimeout(function(){
         	arise(0);
         });
        if(iH>$('.screen').eq(1).offset().top){
         	$('.lform').animate({left:0,opacity:1},1000);
            $('.titF3 img').animate({top:150,opacity:1},1000);
            $('.textF3').animate({top:253,opacity:1},1000);
            $('.iconF3').animate({top:243,opacity:1},1000)
         };
        if(iH>$('.screen').eq(2).offset().top){
         	$('.f4T img').animate({top:0,opacity:1},1000);
            $('.f4C').animate({top:232,opacity:1},1000);
            $('.f4r img').animate({left: 0,opacity:1},1000);
         };
        if(iH>$('.screen').eq(3).offset().top){
         	$('.f5T img').animate({left: 0,opacity:1},1000);
            $('.f5l img').animate({top: 0,opacity:1},1000);
            $('.f5D').animate({top: 287,opacity:1},1000);
         };
        if(iH>$('.screen').eq(4).offset().top){
         	$('.f6l img').animate({left: 0,opacity:1},1000);
            $('.f6T img').animate({top: 0,opacity:1},1000);
            $('.f6D').animate({top: 287,opacity:1},1000);
         };
        if(iH>$('.screen').eq(5).offset().top){
         	$('.f7T img').fadeIn(1000);
            function arise2(n){
         	 	$('.f7rW img').eq(n).animate({left:n*100,'opacity':1},1000,function(){
                     n++;
                     if($('.f7rW img').eq(n)){
                     	arise2(n);
                     }
         	     });
         	 }
            setTimeout(function(){
         	  arise2(0);
            });
         };
        if(iH>$('#F8').offset().top){
        	$('.f8lT img').animate({top:90,opacity:1},1000);
            $('.f8lD').animate({top:205,opacity:1},1000);
            $('.f8rI').animate({top:0,left:0,opacity:1},1000);
            $('.f8rI2T img').animate({top:0,opacity:1},1000,function(){
            	$('.f8rI2C img').slideDown(1000);
            });
        }
	});
	$('.histogram div').each(function(i,elem){
		var x = -100*i+'px';
		if(i<4){
			$(elem).css({"left":-20+i*40,"background-position":''+x+' 0'});
		}else{
			$(elem).css({"left":-30+i*40,"background-position":''+x+' 0'});
		};
	});
//F3
	var start = (function(){
		$('.histogram-icon div').each(function(i,elem){
		     var px = -i*13 +'px';
		     if(i<3){
		     	$(elem).css({"left":27+i*40 ,'background-position':''+px+' 0'});
		     }else if( i==3){
	            $(elem).css({"left":22+i*40 ,'background-position':''+px+' 0'});
		     }else if(i==4){
		     	$(elem).css({"left":23+i*40 ,'background-position':''+px+' 0'});
		     }else if(i==5){
		     	$(elem).css({"left":21+i*40 ,'background-position':''+px+' 0'});
		     }else if(i==6){
		     	$(elem).css({"left":20+i*40 ,'background-position':''+px+' 0'});
		     }else if(i==7){
		     	$(elem).css({"left":18+i*40 ,'background-position':'-92px 0'});
		     };
       });
	});
	start();//初始化
	var now = -1 ,t1=null;
	t1 = setInterval(function(){
	   now++;
	   if(now>8){
     	  now=0;
       }
       move(now); 
	},1000);
	$('.iconF3 div').each(function(i,elem){
		$(elem).hoverDelay({
			hoverDuring: 30, 
            outDuring: 30, 
			hoverEvent:function(){
               clearInterval(t1);
		       move(i);
			},
			outEvent: function(){ 
			   clearInterval(t1);
               now = i;
		       t1 = setInterval(function(){
			       now++;
			  	   if(now>8){
			         	  now=0;
			        }
			        move(now);
		  	   },1000);
			}
		});
    });
	function move(i){
		 if(i==7){
		         var px = (-i*13-1) +'px';
	     }else{
	       	  var px = -i*13 +'px';
	     };
		 start();
	     $('.histogram div').hide();
	     $('.histogram div').eq(i).show();
	     $('.histogram-icon div').eq(i).css('background-position',''+px+' -13px');
		 $('.iconF3 div').css('background-image','url(img/bg-gray.png)');
         $('.iconF3 div').eq(i).css('background-image','url(img/bg-green.png)');
	};
//F9

}) 
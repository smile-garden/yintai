window.onload=function(){
	var wheelBox=getClass('ban',document)[0];
  var aBox=getClass('abox',wheelBox)[0];
	var as=aBox.getElementsByTagName('a');
    var listBox=getClass('list',wheelBox)[0];
    var lists=listBox.getElementsByTagName('li');
    var Btn1=getClass('left',wheelBox)[0];
    var Btn2=getClass('right',wheelBox)[0];
//特卖选项卡
    var temais=getClass('temaizsz',document)[0];
    var sjxs=getClass('sjx',temais);
    var tmas=temais.getElementsByTagName('a');
    var temaix=getClass('temaizx',document);
//本周推荐
    var bhys=getClass('bhys',document)[0];
    var sjx2s=getClass('sjx2',bhys);
    var bhas=bhys.getElementsByTagName('a');
    var ytbh=getClass('ytbhxyx',document);


  listBox.style.zIndex=20;
  lists[0].style.backgroundColor='#e5004f';
	as[0].style.zIndex=10;
	var index=0;
    var t=setInterval(move,2000)
    function move(){ 
    	if (index==as.length) {index=0};
    	for(var i=0;i<as.length;i++){
    		as[i].style.zIndex=0;
            lists[i].style.backgroundColor='';
    	}
    	as[index].style.zIndex=10;
        lists[index].style.backgroundColor='#e5004f';
        index++;
    }
    wheelBox.onmouseover=function(){
    	clearInterval(t);
      Btn1.style.zIndex=40;
      Btn2.style.zIndex=40;
    }
    wheelBox.onmouseout=function(){
    	t=setInterval(move,2000);
      Btn1.style.zIndex=0;
      Btn2.style.zIndex=0;
    }

    for (var i = 0; i < lists.length; i++) {
         lists[i].index=i;
         lists[0].style.backgroundColor='#e5004f';
         as[0].style.zIndex=10;
         lists[i].onmousemove=function(){
          for(var j=0;j<as.length;j++){
            lists[j].style.backgroundColor='';
            as[j].style.zIndex=0;
         }  
         lists[this.index].style.backgroundColor='#e5004f';
         as[this.index].style.zIndex=10;
         index=this.index;
      }
    };
    Btn2.onclick=function(){
       move();
    }
    var j=as.length-1;
    Btn1.onclick=function(){
        if (j==-1) {j=as.length-1};
        for(var i=0;i<as.length;i++){
            as[i].style.zIndex=0;
            lists[i].style.backgroundColor='';
        }
        as[j].style.zIndex=10;
        lists[j].style.backgroundColor='#e5004f';
        j--;

    }
//特卖选项卡
    tmas[0].style.borderColor='#e5004f';
    tmas[0].style.fontWeight='bold';
    sjxs[0].style.borderBottomColor='#e5004f';
  for (var i = 0; i <tmas.length; i++) {
    tmas[i].index=i;
    tmas[i].onmousemove=function(){
      for (var i = 0; i < temaix.length; i++) {
        temaix[i].style.display='none';
        tmas[i].style.borderColor='#333';
        tmas[i].style.fontWeight='normal';
        sjxs[i].style.borderBottomColor='#fff';
      }
        temaix[this.index].style.display='block';
        tmas[this.index].style.borderColor='#e5004f';
        tmas[this.index].style.fontWeight='bold';
        sjxs[this.index].style.borderBottomColor='#e5004f';
    }
  }
//银泰百货选项卡
    bhas[0].style.borderColor='#e5004f';
    bhas[0].style.fontWeight='bold';
    sjx2s[0].style.borderBottomColor='#e5004f';
  for (var i = 0; i <bhas.length; i++) {
    bhas[i].index=i;
    bhas[i].onmousemove=function(){
      for (var i = 0; i < ytbh.length; i++) {
        ytbh[i].style.display='none';
        bhas[i].style.borderColor='#333';
        bhas[i].style.fontWeight='normal';
        sjx2s[i].style.borderBottomColor='#fff';
      }
        ytbh[this.index].style.display='block';
        bhas[this.index].style.borderColor='#e5004f';
        bhas[this.index].style.fontWeight='bold';
        sjx2s[this.index].style.borderBottomColor='#e5004f';
    }
  }


//时尚名品轮播图
 var mpbox=getClass('mpbox',document);

for (var i = 0; i < mpbox.length; i++) {
  wheel(mpbox[i])
};
    
 function wheel(mpbox){
 var mpas=mpbox.getElementsByTagName('a');
 var mplist=getClass('mplist',mpbox)[0];
 var mplis=mplist.getElementsByTagName('li');
 var mpBtn1=getClass('left',mpbox)[0];
 var mpBtn2=getClass('right',mpbox)[0];
 var mpxm=getClass('mpxm',mpbox)[0];
   var k=0;
   mplist.style.zIndex=20;
   mplis[0].style.backgroundColor='#e3165e';
   // var g=setInterval(move1,2000)
  function move1(){
    k++;
    if (k==mpas.length) {k=0};
    for (var i = 0; i < mpas.length; i++) {
      mplis[i].style.backgroundColor='';
    }
    mplis[k].style.backgroundColor='#e3165e';
    animate(mpxm,{left:-390*k},500)
  }
  mpbox.onmouseover=function(){
    // clearInterval(g);
    animate(mpBtn1,{left:0},500);
    animate(mpBtn2,{left:360},500);
  }
  mpbox.onmouseout=function(){
     // g=setInterval(move1,2000);
     animate(mpBtn1,{left:-30},500);
    animate(mpBtn2,{left:390},500);
  }
  for (var i = 0; i < mplis.length; i++) {
    mplis[i].index=i;
    mplis[i].onclick=function(){
      for (var j = 0; j < mplis.length; j++) {
        mplis[j].style.backgroundColor='';
      }
      mplis[this.index].style.backgroundColor='#e3165e';
      animate(mpxm,{left:-390*this.index},500)
      index=this.index;
    }
  }
  mpBtn2.onclick=function(){
    k++;
    if (k==mpas.length) {return};
    for (var i = 0; i < mpas.length; i++) {
      mplis[i].style.backgroundColor='';
    }
    mplis[k].style.backgroundColor='#e3165e';
    animate(mpxm,{left:-390*k},500)
  }

  mpBtn1.onclick=function(){
    k--;
    if (k=0) {return};
    for (var i = 0; i < mpas.length; i++) {
      mplis[i].style.backgroundColor='';
    };
      mplis[k].style.backgroundColor='#e3165e';
      animate(mpxm,{left:-390*k},500)
  }

 }

//时尚名品左下小轮播图
    var wheelbox=$('.wheel');

    for (var i = 0; i < wheelbox.length; i++) {
        wheelx(wheelbox[i])
    };

function wheelx(wheelbox){
    var imgbox=$('.box',wheelbox)[0];
    var imgs=$('.mpxzxn',imgbox);
    var iw=parseInt(getStyle(imgs[0],'width'));
    var lbtn=$('.left',wheelbox)[0];
    var rbtn=$('.right',wheelbox)[0];
    // console.log(rbtn)
    imgs[0].style.left=0;
   
    var aaa=0;
    var next=0;
    function wheelx(){
        next++;
        if (next==imgs.length) {next=0};
        imgs[next].style.left=iw+'px';
        animate(imgs[aaa],{left:-iw})
        animate(imgs[next],{left:0})
        aaa=next;
    }
    rbtn.onclick=function(){
        wheelx();
    }
    //
    lbtn.onclick=function(){
        next--;
        if (next==-1) {next=imgs.length-1};
        imgs[next].style.left=-iw+'px';
        animate(imgs[aaa],{left:iw})
        animate(imgs[next],{left:0})
        aaa=next;
    }
  } 
//特卖线条动画
   var temais=$('.temaizx1');

for (var i = 0; i < temais.length; i++) {
   xiantiao(temais[i]);
};

 function  xiantiao(temai){
        var ones=$('a',temai);
        for (var i = 0; i < ones.length; i++) {
          ones[i].onmouseover=function(){
            animate($('.bt',this)[0],{width:220})
            animate($('.bl',this)[0],{height:260})
            animate($('.br',this)[0],{height:260})
            animate($('.bb',this)[0],{width:220})
          }
          ones[i].onmouseout=function(){
            animate($('.bt',this)[0],{width:0})
            animate($('.bl',this)[0],{height:0})
            animate($('.br',this)[0],{height:0})
            animate($('.bb',this)[0],{width:0})
          }
        }
    }
//百货专柜线条
  var baihuo=$('.ytbhxyx1')[0]; 
  
      var bhtus=$('a',baihuo);
        for (var i = 0; i <bhtus.length; i++) {
          bhtus[i].onmouseover=function(){
            animate($('.bt',this)[0],{width:200})
            animate($('.bl',this)[0],{height:250})
            animate($('.br',this)[0],{height:250})
            animate($('.bb',this)[0],{width:200})
          }
          bhtus[i].onmouseout=function(){
            animate($('.bt',this)[0],{width:0})
            animate($('.bl',this)[0],{height:0})
            animate($('.br',this)[0],{height:0})
            animate($('.bb',this)[0],{width:0})
          }
        }


//时尚名品线条
var shishang=$('.mpxy'); 

for (var i = 0; i < shishang.length; i++) {
    shishangxt(shishang[i])
  };  

function shishangxt(shishang){
  var mingpins=$('a',shishang);
        for (var i = 0; i <mingpins.length; i++) {
          mingpins[i].onmouseover=function(){
            animate($('.bt',this)[0],{width:270})
            animate($('.bl',this)[0],{height:180})
            animate($('.br',this)[0],{height:180})
            animate($('.bb',this)[0],{width:270})
          }
          mingpins[i].onmouseout=function(){
            animate($('.bt',this)[0],{width:0})
            animate($('.bl',this)[0],{height:0})
            animate($('.br',this)[0],{height:0})
            animate($('.bb',this)[0],{width:0})
          }
        }
   }
 

 //优化加载  懒加载
var youhuas=$('.youhua');
var yharr=[];
var flagss=[];
var ch=document.documentElement.clientHeight;
for (var i = 0; i < youhuas.length; i++) {
    yharr.push(youhuas[i].offsetTop);
    flagss.push(true)
};
// console.dir(yharr)


//楼层导航
 var floors=$('.mingpin-box');
 var spans=$('.menuk');
 var ydao=$('.ysmenu')[0];
 var sps=$('span',ydao);
 var floorTop=[];
 for (var i = 0; i < floors.length; i++) {
   floorTop.push(floors[i].offsetTop);
 };
var kg=true;
window.onscroll=function(){
  var stop=document.body.scrollTop||document.documentElement.scrollTop;
  // document.title=stop;
   for (var i = 0; i <sps.length; i++) {
     if (floorTop[i]<stop+150) {
      for(var j=0;j<sps.length;j++){
        sps[j].style.opacity=0;
      }
      sps[i].style.opacity=1;
    }else{
      sps[i].style.opacity=0;
    }  
   }
//导航的隐藏出现
   if (stop>800) {
          if (kg) {
            kg=false;
            animate(ydao,{bottom:15},100)
          };  
        }else{
          if (!kg) {
            kg=true;
            animate(ydao,{bottom:-595},100)
          };
        }

//优化加载
for (var i = 0; i < yharr.length; i++) {
    if(yharr[i]<=stop+ch-200&&flagss[i]){
      flagss[i]=false;
      var yhtps=$('img',youhuas[i])
      for(var j=0;j<yhtps.length;j++){
        yhtps[j].src=yhtps[j].getAttribute('asrc')
      }
    }
};
}
// window.onscroll();



for (var i = 0; i < spans.length; i++) {
  spans[i].index=i;
  spans[i].onclick=function(){
        animate(document.body,{scrollTop:floorTop[this.index]})
        animate(document.documentElement,{scrollTop:floorTop[this.index]})
  }
};

for (var i = 0; i < sps.length; i++) {
 sps[i].index=i;
 sps[i].onmouseover=function(){
  for(var j=0; j<sps.length;j++){
    sps[j].style.opacity=0;
  }
    sps[this.index].style.opacity=1;
 }
 sps[i].onmouseout=function(){
    sps[this.index].style.opacity=0;;
 }
};

//图片精灵技术   头部  

  var topz=$('.topz')[0];
  var topzas=$('a',topz);
  var icons=$('.icon');
  var spas=$('.tzz',topz)
  var icon3=$('.icon3')[0];

    topzas[0].onmouseover=function(){
        spas[0].style.color="#ff004e";
        icons[0].style.backgroundPosition="-225px -27px";
    } 
    topzas[0].onmouseout=function(){
        spas[0].style.color="";
        icons[0].style.backgroundPosition="-225px 0"; 
    }
    
    topzas[1].onmouseover=function(){
        spas[1].style.color="#ff004e";
        icons[1].style.backgroundPosition="-225px -88px"; 
    } 
    topzas[1].onmouseout=function(){
        spas[1].style.color="";
        icons[1].style.backgroundPosition="-225px -58px"; 
    }
    
    topzas[2].onmouseover=function(){
        spas[2].style.color="#ff004e";
        icon3.style.backgroundPosition="0 -27px"; 
    } 
    topzas[2].onmouseout=function(){
        spas[2].style.color="";
        icon3.style.backgroundPosition="0 0";
    }

//图片精灵技术  banner    全部分类字
  var cfenlei=$('.cfenlei')[0];
  var fenleis=$('.fenlei');
    var flzs=$('.flz');
    var icns=$('.icn');
    var tu3s=$('.tu3');
   for (var i = 0; i < flzs.length; i++) {
      flzs[i].index=i;
        flzs[i].onmouseover=function(){
        var x=-this.index*17;
        flzs[this.index].style.backgroundColor="#e5004f";
        icns[this.index].style.backgroundPosition=x+"px -129px"; 
        tu3s[this.index].style.opacity=0;
        fenleis[this.index].style.display="block";
    } 
    flzs[i].onmouseout=function(){
        var x=-this.index*17;
        flzs[this.index].style.backgroundColor="";
        icns[this.index].style.backgroundPosition=x+"px -111px";
        tu3s[this.index].style.opacity=1;
        fenleis[this.index].style.display="none";
    }
};

for (var i = 0; i < fenleis.length; i++) {
  fenleis[i].index=i;
  fenleis[i].onmouseover=function(){
    var x=-this.index*17;
    flzs[this.index].style.backgroundColor="#e5004f";
    icns[this.index].style.backgroundPosition=x+"px -129px"; 
    tu3s[this.index].style.opacity=0;
    fenleis[this.index].style.display="block";
  }
  fenleis[i].onmouseout=function(){
    var x=-this.index*17;
    flzs[this.index].style.backgroundColor="";
    icns[this.index].style.backgroundPosition=x+"px -111px";
    tu3s[this.index].style.opacity=1;
    fenleis[this.index].style.display="none";
  }
};
//下拉菜单
var xiala=$('.xiala')[0];
var uls=$('ul',xiala)[0];
    hover(xiala,function(){
      uls.style.display="block";
      uls.style.backgroundColor="#fff"
      xiala.style.background="#fff";
    },function(){
      uls.style.display="none";
      xiala.style.background="#eee";
    })

var weixin=$('.weixin')[0];
var tu=$('.tu',weixin)[0];
var jt=$('.jt1',weixin)[0];
    hover(weixin,function(){
      tu.style.display="block";
      weixin.style.backgroundColor="#fff";
      jt.style.backgroundPosition="-170px -129px";
    },function(){
      tu.style.display="none";
      weixin.style.backgroundColor="#eee";
      jt.style.backgroundPosition="-170px -111px"
    })
    
var weixin2=$('.weixin2')[0];
var tu2=$('.tu2',weixin2)[0];
var jt2=$('.jt1',weixin2)[0];
    hover(weixin2,function(){
      tu2.style.display="block";
      weixin2.style.backgroundColor="#fff";
      jt2.style.backgroundPosition="-170px -129px";
    },function(){
      tu2.style.display="none";
      weixin2.style.backgroundColor="#eee";
      jt2.style.backgroundPosition="-170px -111px"
    })



}
let cat ={
  name:"cola",
  age:2,
  color:"white",
  isMale:true,
  isLive:true,
  food:100,
  health:100, 
  liveTimer:null,
  weight:"20",
  friend:10,
  // xuetiao:10,
  



  
  bark: function () {
    if (!this.isLiving()) return;
     view.displayYell('miao！miao！');
  },

    tellname:function(){
      if (!this.isLiving()) return;
      view.displayYell('my name is '+ this.name);
      return this.name;
    },

    setname: function (newname){
      if (!this.isLiving()) return;
        this.name =newname;
    },

    isLiving: function () {
      if (this.isLive) {
        return true;
      } else {
         view.displayYell(this.name + '一动不动，已经去了天堂');
        return false;
      }
    },

    run:function (){
      if(this.isLive){
     if(this.food <=20){
      view.displayYell("主人"+this.name+"我饿了");
     }else{
      view.displayYell(this.name+"在公园跑步");
      this.food -=10;
      this.weight -=1;
      this.friend +=10;
      // this.xuetiao-=2;
  }
}else {
  view.displayYell("一动不动，去天堂了");
}
    },

  feed:function(){
    if (this.isLive) {
    this .food =100;
    // this.xuetiao +=5;
    view.displayYell(this .name +"我吃饱了");
    this.weight +=1;
    }
  },
  showStatus: function () {
    let pro = document.getElementById('progress2');
    pro.style.width = this.health + '%';
    pro.innerHTML='health  :  ' + this.health;

    let pro1 = document.getElementById('progress');
    pro1.style.width = this.food + '%';
    pro1.innerHTML='food  :  ' + this.food;

    return '饱食度: [' + this.food + '], 健康值: [' + this.health + '],体重: [' + this.weight + '],友情度：['+this.friend+ '], 是否存活: ['+ (this.isLive ? '活的' : '挂了') + ']';
  },
  live:function(){
    let self =this;
    this.liveTimer = setInterval (function(){
    self.food --;
    self.checkFood();
    self.checkHealth();
    // console.log(self.food);
  },1000);
},

checkFood:function(){
  if(this.food<=0){
    this.food=0;
    this.health -=5;
    view.displayYell('m!miao!miao!')
  }else if(this.food >=80){
    this.food=this.food >=100?100:this.food;
    this.health +=5;
  }
},
checkHealth: function () {
  this.health = this.health >= 100 ? 100 : this.health;
  if (this.health <= 0 ) {
    this.dead();
  };
},
dead:function(){
  // view.displayYell(this.health);
  // if(this.health<=0){
    view.displayYell("miaowoooooooooo");
    clearInterval(this.liveTimer);
  // };
  this.isLive =false;
},
tellStatus () {
  return '饱食度: [' + this.food + '], 健康值: [' + this.health + '],体重: [' + this.weight + '],友情度：['+this.friend+ '], 是否存活: ['+ (this.isLive ? '活的' : '挂了') + ']';
},
resurrect: function () {
  if (!this.isLive) {
    this.isLive = true;
    this.health = 100;
    this.food = 100;
    this.live();
    view.displayYell('为你而战，我的主人');
  } else {
    view.displayYell('说啥呢，老子活蹦乱跳');
  }
},
weigh:function(){
  if(this.weight>=20){
    // this.weight=10;
    // this.weight -=1;
    view.displaykuang('努力减肥中......'+'   体重：'+this.weight)
  }else if(this.weight <=19){
    this.weight=this.weight >=100?100:this.weight;
    // this.weight +=5;
    view.displaykuang(  '努力吃饭中......'+ '    体重：'+this.weight);
  }
  
},
}
let oipc=document.getElementById('pic');
		let isDrag=false;//是否开始拖拽 false 不拖拽
         let disX,disY;//图片相对于图片的位置
		//鼠标按下时
		oipc.onmousedown=function(e){
			isDrag=true;
			this.style.cursor='move';
            e=e||window.event;//兼容性写法
            //鼠标位置
            let x=e.clientX;
            let y=e.clientY;
            //鼠标相对于图片的位置
            disX=x-this.offsetLeft;
            disY=y-this.offsetTop;
		}
 
		//鼠标移动时
		document.onmousemove=function(e){
		  if(!isDrag){
		  	return;
		  }
          e=e||window.event;//兼容性写法
          //鼠标位置
          let x=e.clientX;
          let y=e.clientY;
          //修改图片位置
          oipc.style.left=x-disX+'px';
          oipc.style.top=y-disY+'px';
		}
 
		//鼠标抬起时
		document.onmouseup=function(){
			isDrag=false;
			oipc.style.cursor='default';
           
		}

let view ={
  displayCat:function(){
  let catDiv = document.getElementById('catPic');
  catDiv.setAttribute("class","cat");
},
  
  displayStatus:function(){
      let statusBord = document.getElementById('status');
      setInterval(function () {
      statusBord.innerHTML = cat.showStatus();
        }, 10);
  },
  displayYell: function (str){
    let catYell = document.getElementById('yell');
    catYell.innerHTML = str;
  },
  displaykuang: function (lll) {
    let catkuang = document.getElementById('kuangkuang');
    catkuang.innerHTML = lll;
  },
  displaychat: function (mmm) {
    let chat = document.getElementById('chat');
    chat.innerHTML = mmm;
  },
  displayaa: function (mz) {
    let aa = document.getElementById('aa');
    aa.innerHTML = mz;
  },
  // displayxuetiao:function(){
  //   setTimeout(function(){
  //     let kkkkk =document.getElementById("kkkk");
  //     kkkkk.style.width =cat.xuetiao +"px";
  //     // kkkkk.style.width =cat.xuetiao -="5px";
  //   },1);
  // }
  
};
function apple(){  
  console.log("this is haha");
  let jindutiao = document.getElementById("progress");
  jindutiao.style.width = health; //parseInt(jindutiao.style.width) + 1 + "%";
  jindutiao.innerHTML = jindutiao.style.width;  
  if(jindutiao.style.width == "100%") { 
  window.clearInterval(shijian);
  let healthy = window.setInterval(function(){apple();},100); 
  };
};






view .displayCat();
view.displayStatus();
view.displayYell('我是一只快乐的肥喵');
// view.displaychat('主人，我想认识新朋友');
view.displaykuang('！万恶的体重秤 ！');
// view.displayaa('我叫lucy');

cat.live();
cat.feed();
// let catname =cat.tellname();
// console.log(cat.name);
// cat.bark();
// cat.tellname();
// cat.setname("hahah");
// cat.tellname();
// cat.run();
// cat.run();
cat.run();
// cat.feed();
// cat.feed();
// cat.run();
// cat.run();
// cat.run();
// cat.run();
// cat.run();



let cat2 ={
  name2:"lucy",
  age2:2,
  color2:"white",
  isMale2:true,
  isLive2:true,
  food2:100,
  health2:100,
  liveTimer2:null,
  weight2:"20",
  friend2:10,
  // xuetiao2:10,
  

  bark2: function () {
    if (!this.isLiving2()) return;
     view2.displayYell2('miao！miao！');
  },

    tellname2:function(){
      if (!this.isLiving2()) return;
      view2.displayYell2('my name2 is '+ this.name2);
      return this.name2;
    },

    setname2: function (newname2){
      if (!this.isLiving2()) return;
        this.name2 =newname2;
    },

    isLiving2: function () {
      if (this.isLive2) {
        return true;
      } else {
         view2.displayYell2(this.name2 + '一动不动，已经去了天堂');
        return false;
      }
    },

    run2:function (){
      if(this.isLive2){
     if(this.food2 <=20){
      view2.displayYell2("主人"+this.name2+"我饿了");
     }else{
      view2.displayYell2(this.name2+"在公园跑步");
      this.food2 -=10;
      this.weight2 -=1;
      this.friend2 +=10;
      // this.xuetiao2-=2;
  }
}else {
  view2.displayYell2("一动不动，去天堂了");
}
    },

  feed2:function(){
    if (this.isLive2) {
    this .food2 =100;
    view2.displayYell2(this .name2 +"我吃饱了");
    this.weight2 +=1;
    // this.xuetiao2 +=50;
    }
  },
  showStatus1: function () {
    let aaa = document.getElementById('progress3');
    aaa.style.width = this.health2 + '%';
    aaa.innerHTML='health  :  ' + this.health2;

    let aaa1 = document.getElementById('progress4');
    aaa1.style.width = this.food2 + '%';
    aaa1.innerHTML='food  :  ' + this.food2;

    return '饱食度: [' + this.food2 + '], 健康值: [' + this.health2 + '],体重: [' + this.weight2 + '],友情度：['+this.friend2+ '], 是否存活: ['+ (this.isLive2 ? '活的' : '挂了') + ']';
  },
  live2:function(){
    let self2 =this;
    this.liveTimer2 = setInterval (function(){
    self2.food2 --;
    self2.checkfood2();
    self2.checkhealth2();
    // console.log(self2.food2);
  },1000);
},

checkfood2:function(){
  if(this.food2<=0){
    this.food2=0;
    this.health2 -=5;
    view2.displayYell2('m!miao!miao!')
  }else if(this.food2 >=80){
    this.food2=this.food2 >=100?100:this.food2;
    this.health2 +=5;
  }
},
checkhealth2: function () {
  this.health2 = this.health2 >= 100 ? 100 : this.health2;
  if (this.health2 <= 0 ) {
    this.dead2();
  };
},
dead2:function(){
  // view2.displayYell2(this.health2);
  // if(this.health2<=0){
    view2.displayYell2("miaowoooooooooo");
    clearInterval(this.liveTimer2);
  // };
  this.isLive2 =false;
},
tellStatus2:function () {
  return '饱食度: [' + this.food2 + '], 健康值: [' + this.health2 + '],体重: [' + this.weight2 + '],友情度：['+this.friend2+ '], 是否存活: ['+ (this.isLive2 ? '活的' : '挂了') + ']';
},
resurrect2: function () {
  if (!this.isLive2) {
    this.isLive2 = true;
    this.health2 = 100;
    this.food2 = 100;
    this.live2();
    view2.displayYell2('为你而战，我的主人');
  } else {
    view2.displayYell2('说啥呢，老子活蹦乱跳');
  }
},
weigh2:function(){
  if(this.weight2>=20){
    // this.weight2=10;
    // this.weight2 -=1;
    view2.displaykuang2('努力减肥中......'+'   体重：'+this.weight2)
  }else if(this.weight2 <=19){
    this.weight2=this.weight2 >=100?100:this.weight2;
    // this.weight2 +=5;
    view2.displaykuang2(  '努力吃饭中......'+ '    体重：'+this.weight2);
  }
  
},
// chatting:function(){
//   if(this.friend2<=10){
//     this.friend2=10;
//     view2.displaychat('认识新朋友中......'+' 友好值：'+this.friend2);
//     view2.displaychat('你好'+this.name22);
//     view2.displaychat('玩耍中');
//     this.friend2+=1;
//   }else if(this.friend2 >=100){
//     this.friend2=this.friend2 >=100?100:this.friend2;
//     view2.displaychat(  '我们已经是好朋友'+ '    友好值：'+this.friend2);
//   }
// }
};
// let oipc=document.getElementById('pic');
// 		let isDrag=false;//是否开始拖拽 false 不拖拽
//          let disX,disY;//图片相对于图片的位置
// 		//鼠标按下时
// 		oipc.onmousedown=function(e){
// 			isDrag=true;
// 			this.style.cursor='move';
//             e=e||window.event;//兼容性写法
//             //鼠标位置
//             let x=e.clientX;
//             let y=e.clientY;
//             //鼠标相对于图片的位置
//             disX=x-this.offsetLeft;
//             disY=y-this.offsetTop;
// 		}
 
// 		//鼠标移动时
// 		document.onmousemove=function(e){
// 		  if(!isDrag){
// 		  	return;
// 		  }
//           e=e||window.event;//兼容性写法
//           //鼠标位置
//           let x=e.clientX;
//           let y=e.clientY;
//           //修改图片位置
//           oipc.style.left=x-disX+'px';
//           oipc.style.top=y-disY+'px';
// 		}
 
// 		//鼠标抬起时
// 		document.onmouseup=function(){
// 			isDrag=false;
// 			oipc.style.cursor='default';
           
// 		}
let view2 ={
  displayCat2:function(){
  let catDiv2 = document.getElementById('catPic2');
  catDiv2.setAttribute("class","cat2");
},
  
  // displayStatus2:function(){
  //   setInterval(function(){
  //     let catStatus2 =document.getElementById("status2");
  //     catStatus2.innerHTML=cat2.tellStatus2();
  //   },100);
  // },
  displayStatus1:function(){
    let statusBord1 = document.getElementById('status2');
    setInterval(function () {
    statusBord1.innerHTML = cat2.showStatus1();
      }, 10);
},
  displayYell2: function (str2) {
    let catYell2 = document.getElementById('yell2');
    catYell2.innerHTML = str2;
  },
  displaykuang2: function (lll2) {
    let catkuang2 = document.getElementById('kuangkuang2');
    catkuang2.innerHTML = lll2;
  },
  displaychat2: function (mmm2) {
    let chat2 = document.getElementById('chat2');
    chat2.innerHTML = mmm2;
  },
  displayaa2: function (mz2) {
    let aa2 = document.getElementById('aa2');
    aa2.innerHTML = mz2;
  },
//   displayxuetiao2:function(){
//     setTimeout(function(){
//       let kkkkk2 =document.getElementById("kkkk2");
//       kkkkk2.style.width =cat2.xuetiao2 +="px";
//       kkkkk2.style.width =cat2.xuetiao2 -="5px";
//     },100);
// }
}
function apple1(){  
  console.log("this is haha");
  let jindutiao1 = document.getElementById("progress3");
  jindutiao1.style.width = health2; //parseInt(jindutiao.style.width) + 1 + "%";
  jindutiao1.innerHTML = jindutiao1.style.width;  
  if(jindutiao1.style.width == "100%") { 
  window.clearInterval(shijian1);
  let health = window.setInterval(function(){apple1();},100); 
  };
};
view2 .displayCat2();
view2.displayStatus1();
view2.displayYell2('我是一只快乐的肥喵');
// view2.displaychat('主人，我想认识新朋友');
view2.displaykuang2('！万恶的体重秤 ！');
// view2.displayaa('我叫lucy');

cat2.live2();
// let catname2 =cat.tellname2();
// console.log(cat.name2);
// cat.bark2();
// cat.tellname2();
// cat.setname2("hahah");
// cat.tellname2();
// cat.run2();
// cat.run2();
cat2.run2();



 
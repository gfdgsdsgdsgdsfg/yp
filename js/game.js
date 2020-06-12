"use strict"
var file1=2;
var name="";
var left=true;
var raght=true;
var jamp1=true;
var fvideo=true;
var timer1;
var pflag=true;
var record=0;
var video= document.getElementById('VIDEO');
video.src="video/1.mp4"
let response;
let response1;
var q1=[];
function click1() {
    file1=1
    document.getElementById('variant1-2-1').style.borderColor = 'green';
    document.getElementById('variant1-2-2').style.borderColor = 'white';
}
function click2() {
    file1=2
    document.getElementById('variant1-2-2').style.borderColor = 'green';
    document.getElementById('variant1-2-1').style.borderColor = 'white';
}
var ss2=0;
var ss3=0;
function game_prov() {
    if ((document.getElementById('name2').value!="")){ 
           document.getElementById('variant').style.display = 'none';
           document.getElementById('VIDEO1').style.display = 'block'; 
           video.play()
           ss3=video.duration
           timer1=setInterval(function(){
                ss2=ss2+1;
                if(ss2>=ss3){
                    video.pause();
                   clearInterval(timer1);
                   fvideo=false;
                   game_prov1();
                }
           },1000);   
           addEventListener("keydown", function(event) {  
            if (event.keyCode == 27 && fvideo){ 
                video.pause();
                clearInterval(timer1);
                fvideo=false;
                game_prov1();  
            }
        })
        
        name =  document.getElementById('name2').value;
       
    }else{
        alert("Введите имя");
    }
}
function game_prov1(){
    document.getElementById('VIDEO1').style.display = 'none'; 
    document.getElementById('wrapper').style.display = 'flex'; 
    pers();
}
function rez(){
    document.getElementById('wrapper').style.display = 'none';
    
    document.getElementById('rez').style.display = 'block';
    record=mm*60+ss;
    

    response =  fetch("http://api.can4eyc.ru/", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          //'Content-Type': 'application/json'
           'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:`name=${name}&record=${record}` 
      }).then(response => response.json()) // Ответ с сервера переводится в JSON
      .then(res => console.log(res));

      setTimeout(() => {   
            response =  fetch("http://api.can4eyc.ru/", {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
            }).then(response => response.json()) // Ответ с сервера переводится в JSON
            .then(res => q1=res);
        
      setTimeout(() => {  
            console.log(q1);
            console.log(q1.records);
            for(let i=0; i<q1.records;i++){
                
                let rootElem=document.querySelector(".rez2");
                let newElement=document.createElement('div');
                if(q1[i].name==name&&q1[i].record==record){
                    newElement.className="rez2_2";
                }else{
                    newElement.className="rez2_1";
                }
                
                newElement.innerText=q1[i].name;
                rootElem.append(newElement)

                 rootElem=document.querySelector(".rez2");
                 newElement=document.createElement('div');
                 if(q1[i].name==name&&q1[i].record==record){
                    newElement.className="rez2_2";
                }else{
                    newElement.className="rez2_1";
                }
                newElement.innerText=q1[i].record;
                
                rootElem.append(newElement)
            }
        }, 500);
    }, 500);
        
  
       
      
}
var canvas = document.getElementById("canvas"); //Получение холста из DOM
var context = canvas.getContext("2d"); //Получение контекста — через него можно работать с холстом
//карта
var maps1={
    widht:128,
    height:128,
    /*        1    2    3    4    5    6    7    8    9   10   11   12   13   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37   38   39   40   41   42   43   44   45   46   47   48   49  */ 
    source: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',    
             ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',    
             ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',    
             ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',   
             'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'п', 'п', 'п', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'п', 'п', 'п', ' ', 'п', 'п', 'п', ' ', ' ', 'п', 'x', 'п', ' ', 'п', ' ', ' ', 'п', 'п', 'п', ' ', ' ', 'x', ' ', 'п', 'п', 'п', ' ', ' ', ' ', ' ',  
             '6', '6', '6', '6', '6', '6', '6', '6', '1', '1', '1', '6', '6', '6', '6', '6', '6', '6', '1', '1', '1', '6', '1', '1', '1', '6', '6', '1', '6', '1', '6', '1', '6', '6', '1', '1', '1', '6', '6', '6', '6', '1', '1', '1', '6', '6', '6', 'f',      
            ]}
//скин персонажа
var timer;
var player1= new Image();
var player2= new Image();
var player3= new Image();
var player4= new Image();
var player5= new Image();
var player6= new Image();
var player7= new Image();
var player8= new Image();
var player9= new Image();
var player10= new Image();
var player11= new Image();
var player12= new Image();
var player13= new Image();
var player14= new Image();
var player15= new Image();
var player16= new Image();
var player17= new Image();
var player18= new Image();
var player19= new Image();
var player20= new Image();
function pers(){
    if (file1==1){
        player1.src='img/Emi/стоит1-1.png';  
        player2.src='img/Emi/бег1-1.png'; 
        player3.src='img/Emi/бег2-1.png'; 
        player4.src='img/Emi/бег3-1.png'; 
        player5.src='img/Emi/бег4-1.png'; 
        player6.src='img/Emi/бег5-1.png'; 
        player7.src='img/Emi/бег6-1.png'; 
        player8.src='img/Emi/бег7-1.png'; 
        player9.src='img/Emi/бег8-1.png'; 
        player10.src='img/Emi/прыжек1.png'; 

        player12.src='img/Emi/стоит1.png';  
        player13.src='img/Emi/бег1.png'; 
        player14.src='img/Emi/бег2.png'; 
        player15.src='img/Emi/бег3.png'; 
        player16.src='img/Emi/бег4.png'; 
        player17.src='img/Emi/бег5.png'; 
        player18.src='img/Emi/бег6.png'; 
        player19.src='img/Emi/бег7.png'; 
        player20.src='img/Emi/бег8.png'; 
        player11.src='img/Emi/прыжек.png';
    }
    else{
        player1.src='img/Sonic/стоит1.png';  
        player2.src='img/Sonic/бег1.png'; 
        player3.src='img/Sonic/бег2.png'; 
        player4.src='img/Sonic/бег3.png'; 
        player5.src='img/Sonic/бег4.png'; 
        player6.src='img/Sonic/бег5.png'; 
        player7.src='img/Sonic/бег6.png'; 
        player8.src='img/Sonic/бег7.png'; 
        player9.src='img/Sonic/бег8.png'; 
        player10.src='img/Sonic/прыжек.png'; 

        player12.src='img/Sonic/стоит1-1.png';  
        player13.src='img/Sonic/бег1-1.png'; 
        player14.src='img/Sonic/бег2-1.png'; 
        player15.src='img/Sonic/бег3-1.png'; 
        player16.src='img/Sonic/бег4-1.png'; 
        player17.src='img/Sonic/бег5-1.png'; 
        player18.src='img/Sonic/бег6-1.png'; 
        player19.src='img/Sonic/бег7-1.png'; 
        player20.src='img/Sonic/бег8-1.png'; 
        player11.src='img/Sonic/прыжек1.png';
    }
    setTimeout(function(){audio1.play();
        audio1.loop=true;
    },100);
    addEventListener("keydown", function(event) {  
        if ((event.keyCode == 32 &&jamp1) && fflag){
            fkey1=true;
            fflag=false;
            fflag1=true
            b=24  ;
            audio2.play();
        }
         if(event.keyCode == 65 &&raght){
             fkey2=true;
             fnapr1 = true;
             fnapr2= false;
        }else if(event.keyCode == 68&&left){
            fkey3=true;
            fnapr1 = false;
             fnapr2= true;
        }

    addEventListener("keyup", function(event) {
            if (event.keyCode == 32){
                fkey1=false;
                
            }
             if(event.keyCode == 65){
                fkey2=false;
                sprite=0;
            }
             if(event.keyCode == 68){
                fkey3=false;
                sprite1=0;
            }
            });
    });
    timer=setInterval(function() {
        ss=ss+1;
        HP=HP-1;
        if(HP<=0){
            xpp()
        }
        if(ss==60){
            mm=mm=1;
            ss=0
        }
        if(fxp==1){
            fxp=0
            xpp()
        }
        
        if(res){
            clearInterval(timer)
        }
        Time();
      }, 1000);
    game();
    
}
var audio1=new Audio();
audio1.src="audio/фоновая.mp3"
var audio2=new Audio();
audio2.src="audio/jump.mp3"
var audio3=new Audio();
audio3.src="audio/swing_001.mp3"
var audio4=new Audio();
audio4.src="audio/hp.mp3"
var audio5=new Audio();
audio5.src="audio/1.mp3"
var audio6=new Audio();
audio6.src="audio/2.mp3"
var x=11;//скорость
var y=1;//скорость
var jj=0;//координаты перса
var ii=0; //координаты перса
//обработка прыжка
var fflag=true
var fflag1=false
var fflag2=false
var b=30;
//камера
var xx=0;
//направления
var fnapr1 =  false;
var fnapr2=true;
var sprite1=0;
var sprite=0;
var fkey1=false;
var fkey2=false;
var fkey3=false;

//xp
var hp= new Image();
hp.src='img/hp.png';
var HP=100;
var ss1=0;
var fxp=0;
var vtoroy=true;
var Perv=true;
//таймер
var mm=0;
var ss=0;
var res=false;
//загрузка эл. карты
var maps1_1= new Image();
maps1_1.src='img/maps/1.png';

var maps1_6= new Image();
maps1_6.src='img/maps/6.png';

var maps1_2= new Image();
maps1_2.src='img/maps/пол.png';

var maps1_3= new Image();
maps1_3.src='img/maps/2.png';

var maps1_11= new Image();
maps1_11.src='img/maps/преп.png';
//загрузка фона
var fonimg = new Image();
fonimg.src='img/fon.png';
function map(){
    var sim=0
    for(let i=0;i<=5;i++ ){
        for(let j=0;j<=maps1.source.length/6-1;j++ ){
             
            if(maps1.source[sim]=='6'){ 
                context.drawImage(maps1_6,j*maps1.widht+xx,i*maps1.height,maps1.widht,maps1.height);
                if(ii>i*maps1.height-80 && jj>=j*maps1.widht+xx && jj <=j*maps1.widht+maps1.widht+xx){
                    if(fflag2){
                        fflag=true;
                    }
                }

            }else if(maps1.source[sim]=='п'){ 
                context.drawImage(maps1_11,j*maps1.widht+xx,i*maps1.height+90,maps1.widht,95);  

            }else if(maps1.source[sim]=='1'){ 
                context.drawImage(maps1_1,j*maps1.widht+xx,i*maps1.height+maps1.height/2,maps1.widht,maps1.height/2);
                context.drawImage(maps1_2,j*maps1.widht+xx, i*maps1.height,maps1.widht,15);
                if(ii>i*maps1.height-100 && jj>=j*maps1.widht+xx-40 && jj <=j*maps1.widht+maps1.widht+xx-20){
                    fxp =1;
                    if(fflag2){
                        fflag=false;
                    }

                }
            }else if(maps1.source[sim]=='x'){ 
                if(vtoroy){
                    context.drawImage(hp,39*maps1.widht+xx,i*maps1.height+60,70,50);
                     if(ii>i*maps1.height+20 && jj>=39*maps1.widht+xx-40 && jj <=39*maps1.widht+maps1.widht+xx){
                        vtoroy=false;

                        xppp();
                    }   
                }
                if(Perv){
                    context.drawImage(hp,28*maps1.widht+xx+30,i*maps1.height+60,70,50);
                    if(ii>i*maps1.height+20 && jj>=28*maps1.widht+xx-40 && jj <=28*maps1.widht+maps1.widht+xx){
                        Perv=false
                        xppp();
                    }   
                }
            }else if(maps1.source[sim]=='f'){ 
                context.drawImage(maps1_3,j*maps1.widht+xx,i*maps1.height,200,128);
                if(ii>i*maps1.height-100 && jj>=j*maps1.widht+xx+10){
                    rez();
                    result();
                }
            }

            if(maps1.source[sim]=='p'&&pflag){
                pflag=false
                ii=maps1.height*i+maps1.height-70;
                jj=maps1.widht*j+maps1.widht-100;
            }
            sim++;
        }
    }

}
function result(){
    res=true;
    left=false;
    raght=false;
    jamp1=false;
    audio1.pause();
    audio5.play();
}
function game(){
    if (res){
        return;
    }
    render()
    requestAnimFrame(game)
    
}
function Time(){
    context.fillStyle = "#FFF";
    context.font = 'bold 30px sans-serif';
    context.fillText("Time: "+String(mm)+" : "+String(ss),1800,40)
}
//хп
function xppp(){
    HP=HP+30
    audio4.play();
}
function xpp(){
    HP=HP-30
    audio3.play();
    if (HP<=0){
        audio6.play()
        jj=0;//координаты перса
        ii=0; //координаты перса
       //обработка прыжка
        fflag=true
        fflag1=false
        fflag2=false
        b=30;
       //камера
        xx=0;
       //направления
        fnapr1 = false;
        fnapr2= true;
        sprite1=0;
        sprite=0;
        fkey1=false;
        fkey2=false;
        fkey3=false;
   
       //xp
        HP=100;
        ss1=0;
        fxp=0;
      
        res=false;
        pflag=true;
        vtoroy=true;
         Perv=true;
    }
}
//отрисовка
function render(){
    context.drawImage(fonimg,0,0,2040,768);
    context.drawImage(hp,50,5,70,50);
    context.fillStyle = "#FFF";
    context.font = 'bold 30px sans-serif';
    context.fillText("= "+String(HP),140,40)
    Time()
    //прыг 
    if(fflag1==true){
        b--;
        if(b==-23){
            fflag1=false;
            fflag2=true;
        }else{
            fflag2=false;
        }
        ii=ii-b;
    }
    //отрисовка карты
    map()
    //стоит
    if(!fkey2 && !fkey3&& !fkey1){
        if(fnapr1){
            context.drawImage(player1,jj,ii,58,72); }
        else if(fnapr2){
            context.drawImage(player12,jj,ii,58,72);   
        }
    }
    //бег влево
    if(fkey2){
        if (jj>10){
            if(jj<500 &&xx<0){
                xx=xx+x
            }else{
            jj=jj-x;}     
        }
        sprite=sprite+1;
        if(file1==2){
            if (sprite<=3){
                context.drawImage(player2,jj,ii,50,72);
            }
            else if (sprite>3 && sprite<=6){ 
                context.drawImage(player3,jj,ii,52,72);  
            }
            else if (sprite>6 && sprite<=9){
                context.drawImage(player4,jj,ii,64,66); 
            }
            else if (sprite>9 && sprite<=12){
                context.drawImage(player5,jj,ii,50,70); 
            }
            else if (sprite>12 && sprite<=15){
                context.drawImage(player6,jj,ii,56,70); 
            }
            else if (sprite>15 && sprite<=18){
                context.drawImage(player7,jj,ii,68,68);
            }
            else if (sprite>18 && sprite<=21){ 
                context.drawImage(player8,jj,ii,58,68);     
            }
            else if (sprite>21 && sprite<=24){
                context.drawImage(player9,jj,ii,54,68);
                
            }
            else if(sprite=24){
                sprite=0
            }
        }else{
                if (sprite<=3){
                    context.drawImage(player2,jj,ii,48,80);
                }
                else if (sprite>3 && sprite<=6){ 
                    context.drawImage(player3,jj,ii,56,84);  
                }
                else if (sprite>6 && sprite<=9){
                    context.drawImage(player4,jj,ii,76,82); 
                }
                else if (sprite>9 && sprite<=12){
                    context.drawImage(player5,jj,ii,74,78); 
                }
                else if (sprite>12 && sprite<=15){
                    context.drawImage(player6,jj,ii,46,82); 
                }
                else if (sprite>15 && sprite<=18){
                    context.drawImage(player7,jj,ii,60,84);
                }
                else if (sprite>18 && sprite<=21){ 
                    context.drawImage(player8,jj,ii,68,82);     
                }
                else if (sprite>21 && sprite<=24){
                    context.drawImage(player9,jj,ii,72,76);
                    
                }
                else if(sprite=24){
                    sprite=0
                }
            }
        }
      //бег вправо
    else if(fkey3){
        if (jj+Math.abs(xx)<6150){
            if(jj>1000&&xx>-4165){
                xx=xx-x
            }else{
            jj=jj+x;}     
        }
        
        sprite=sprite+1;
        if(file1==2){
            if (sprite<=3){
                context.drawImage(player13,jj,ii,50,72);
            }
            else if (sprite>3 && sprite<=6){ 
                context.drawImage(player14,jj,ii,52,72);  
            }
            else if (sprite>6 && sprite<=9){
                context.drawImage(player15,jj,ii,64,66); 
            }
            else if (sprite>9 && sprite<=12){
                context.drawImage(player16,jj,ii,50,70); 
            }
            else if (sprite>12 && sprite<=15){
                context.drawImage(player17,jj,ii,56,70); 
            }
            else if (sprite>15 && sprite<=18){
                context.drawImage(player18,jj,ii,68,68);
            }
            else if (sprite>18 && sprite<=21){ 
                context.drawImage(player19,jj,ii,58,68);     
            }
            else if (sprite>21 && sprite<=24){
                context.drawImage(player20,jj,ii,54,68);
                
            }
            else if(sprite=24){
                sprite=0
            }
        }else{
            if (sprite<=3){
                context.drawImage(player13,jj,ii,48,80);
            }
            else if (sprite>3 && sprite<=6){ 
                context.drawImage(player14,jj,ii,56,84);  
            }
            else if (sprite>6 && sprite<=9){
                context.drawImage(player15,jj,ii,76,82); 
            }
            else if (sprite>9 && sprite<=12){
                context.drawImage(player16,jj,ii,74,78); 
            }
            else if (sprite>12 && sprite<=15){
                context.drawImage(player17,jj,ii,46,82); 
            }
            else if (sprite>15 && sprite<=18){
                context.drawImage(player18,jj,ii,60,84);
            }
            else if (sprite>18 && sprite<=21){ 
                context.drawImage(player19,jj,ii,68,82);     
            }
            else if (sprite>21 && sprite<=24){
                context.drawImage(player20,jj,ii,72,76);
                
            }
            else if(sprite=24){
                sprite=0
            }
        }
    }
    //прыгать
    else if(fkey1){
        if(fnapr1){
            context.drawImage(player10,jj,ii,58,72); }
        else if(fnapr2){
            context.drawImage(player11,jj,ii,58,72);   
        }
    }
    
}


var requestAnimFrame = (function(){
    return window.requestAnimationFrame|| 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(callback) {
        window.setTimeout(callback, 1000 / 60);}
    })()

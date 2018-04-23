var g=function(node){
    if(node.substr(0,1)=="#"){
        return document.getElementById(node.substr(1));
    }
}

var banner=g("#banner");
var coutrols=g("#controls");
var controlsLis=controls.getElementsByTagName("li");
var timer=null;
var num=0;
for(var i=0;i<controlsLis.length;i++){
    controlsLis[i].index=i;
    controlsLis[i].onclick=function(){
        clearInterval(timer);
        for(var j=0;j<controlsLis.length;j++){
            controlsLis[j].className="";
        }
        this.className='star';
        banner.style.left=-1920*this.index+"px";
        num=this.index;
        autoPlay();
    }
}
function autoPlay(){
    timer=setInterval(function(){
        if(num>2){
            num=0;
        }
        for(var j=0;j<controlsLis.length;j++){
            controlsLis[j].className='';
        }
        controlsLis[num].className='star';
        banner.style.left=-1920*num+"px";
        num++;
    },1500)
}
autoPlay();


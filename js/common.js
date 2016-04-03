// JavaScript Document
function nav(id){
	var oUl = document.getElementById(id);
	var aLi = oUl.children;
	var oBox = aLi[aLi.length - 1];
	
	
	
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseover=function(){
			moveaa(oBox,this.offsetLeft)
		}
	}
	var speed=0;
	var left=0;
	function moveaa(obj,iTarget){
		clearInterval(obj.timer)
		obj.timer=setInterval(function(){
			speed+=(iTarget-left)/5;
			speed*=0.7;
			left+=speed;
			obj.style.left=Math.abs(left)+'px';
			if(obj.offsetLeft==iTarget&&Math.abs(speed)<1){
				clearInterval(obj.timer)
			}
		},30)
	}
}
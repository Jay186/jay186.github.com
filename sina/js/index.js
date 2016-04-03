// JavaScript Document
function tag(obj1,obj2,obj1OldName,obj2OldName,obj1NewName,obj2NewName){
	for(var i=0;i<obj1.length;i++){
		obj1[i].index=i;
		obj1[i].onmouseover=function(){
			for(var i=0;i<obj1.length;i++){
				obj1[i].className=obj1OldName;
				obj2[i].className=obj2OldName;
			}
			this.className=obj1NewName;
			obj2[this.index].className=obj2NewName;
		};			
	};
};	
function tag2(obj1,obj1OldName,obj1NewName){
	for(var i=0;i<obj1.length;i++){
		obj1[i].index=i;
		obj1[i].onmouseover=function(){
			for(var i=0;i<obj1.length;i++){
				obj1[i].className=obj1OldName;
			}
			this.className=obj1NewName;
		};			
	};
};	
window.onload=function(){
	var oComTitleTabs=document.getElementById('comTitle_tabs');
	var aComTitleTabsLi=oComTitleTabs.getElementsByTagName('li');
	tag2(aComTitleTabsLi,'','noBl active');
	
	var oTabTitle=document.getElementById('tab_title');
	var aTabTitleDiv=oTabTitle.getElementsByTagName('div');
	var oSmList=document.getElementById('smList');
	var aSmListUl=oSmList.getElementsByTagName('ul');
	tag(aTabTitleDiv,aSmListUl,'','item','active','item show');
	
	var oDrop=document.getElementById('drop');
	var aDrop=oDrop.getElementsByTagName('i');
	var oPrev=oDrop.getElementsByTagName('a')[0];
	var oNext=oDrop.getElementsByTagName('a')[1];
	var oCListTab=document.getElementById('c_listTab');
	var aCListTab=oCListTab.getElementsByTagName('ul');
	tag(aDrop,aCListTab,'','comList hide','active','comList');
	
	var oDay=document.getElementById('day');
	var aDay=oDay.getElementsByTagName('a');
	var oTabs=document.getElementById('tabs');
	var aTabs=oTabs.getElementsByTagName('div');
	tag(aDay,aTabs,'','tabs_item','active','tabs_item show');
	
	var oSport=document.getElementById('sport');
	var aSport=oSport.getElementsByTagName('li');
	tag2(aSport,'','noBl active')
	
	var oCar=document.getElementById('car');
	var aCar=oCar.getElementsByTagName('li');
	var oCarContent=document.getElementById('car _content');
	var aCarContent=oCarContent.getElementsByTagName('div');
	tag(aCar,aCarContent,'','tabs_item','noBl active','tabs_item show');
	
	var oEtm=document.getElementById('entertainment');
	var aEtm=oEtm.getElementsByTagName('li');
	var oEtmContent=document.getElementById('entertainment_content');
	var aEtmContent=oEtmContent.getElementsByTagName('div');
	tag(aEtm,aEtmContent,'','tabs_item','noBl active','tabs_item show')	;
	
	var oFinance=document.getElementById('finance');
	var aFinance=oFinance.getElementsByTagName('li');
	var oFinanceContent=document.getElementById('finance_content');
	var aFinanceContent=oFinanceContent.getElementsByTagName('div');
	tag(aFinance,aFinanceContent,'','tabs_item','noBl active','tabs_item show');
	
	var oPicture=document.getElementById('picture');
	var aPicture=oPicture.getElementsByTagName('li');
	var oPictureContent=document.getElementById('picture_content');
	var aPictureContent=oPictureContent.children;
	tag(aPicture,aPictureContent,'','tabs_item','noBl active','tabs_item show');
	
	var oRead=document.getElementById('read');
	var aRead=oRead.getElementsByTagName('li');
	var oReadContent=document.getElementById('read_content');
	var aReadContent=oReadContent.getElementsByTagName('div');
	tag(aRead,aReadContent,'','tabs_item','noBl active','tabs_item show');
	
	var oTech=document.getElementById('technology');
	var aTech=oTech.getElementsByTagName('li');
	var oTechContent=document.getElementById('technology_content');
	var aTechContent=oTechContent.getElementsByTagName('div');
	tag(aTech,aTechContent,'','tabs_item','noBl active','tabs_item show');
	
	var oDigit=document.getElementById('digit');
	var aDigit=oDigit.getElementsByTagName('li');
	var oDigitContent=document.getElementById('digit_content');
	var aDigitContent=oDigitContent.getElementsByTagName('div');
	tag(aDigit,aDigitContent,'','tabs_item','noBl active','tabs_item show');
}
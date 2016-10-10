function $(selector,range){
   var range=range||document;
   if (typeof selector=="string") {
       if (selector.charAt(0)=="#") {
         return document.getElementById(selector.substr(1))
       }
       if (selector.charAt(0)==".") {
         return getClass(selector.substr(1),range)
       }
       if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)) {
         return range.getElementsByTagName(selector)
       }
   }else if (typeof selector=="function") {
      return window.onload=selector;
   }
}




function getClass(classname,range){
   if (document.getElementsByClassName) {
   	return range.getElementsByClassName(classname)
   }else{
   	var all=range.getElementsByTagName('*');
   	var arr=[];
   	for (var i = 0; i < all.length; i++) {
   		// if(all[i].className==classname){
   			if (checkclass(all[i].className,classname)) {
   			arr.push(all[i]);
   		}
   	}
   	return arr;
   }
}


function checkclass(tagclass,aclass){
	var tg=tagclass.split(' ');
	for(var i=0;i<tg.length;i++){
		if (tg[i]==aclaaa) {
			return true;
		};
	}
	return false;
}


function getStyle(obj,arrt){
     if (obj.currentStyle) {
         return obj.currentStyle[arrt];
     }else{
      return getComputedStyle(obj,null)[arrt];
     }
}
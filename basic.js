//This js file is suit for sui framework.And it provides some general and useful
//methods.All methods start with 'm' so as to be different from other method.
function mCheckNull(data,msg){
	data=$.trim(data);
	if(data){
		return false;
	}else{
		if(msg){
			$.alert(msg);
		}
		return true;
	}
}
$.alert=alert;
//var pre="/javaservice/"; // /表示ip 没有/表示当前目录
//rewrite ajax method,so as to be more convenient in the future.
$.ax=function (url,data,successFn,errorFn){
//	if(url.indexOf(pre)==-1){
//		url=pre+url;
//	}
	if(errorFn==undefined||errorFn==null){
		errorFn=function(res){
			console.error(res);
			$.alert(res);
		}
	}
	var success=function(res){
		console.log("successfn:"+res);
		var json=JSON.parse(res);
		if(json.code){
			successFn(json.data);
		}else{
			errorFn(json.msg);
		}
	}
	var jsonStr=JSON.stringify(data);
	$.ajax({
		url:url,
		data:{
			data:jsonStr
		},
//		contentType:"application/x-www-form-urlencoded;charset=UTF-8",
		type:'get',		
		success:success,
		error:function(){
			$.alert("出错了！");
		}
	});
}
//the simplest prompt method,it can be used for the test.
function i(){
	$.alert("hello");
}
//date format. from network
/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423      
* (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04      
* (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
* (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
* (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
*/        
Date.prototype.pattern=function(fmt) {         
var o = {         
"M+" : this.getMonth()+1, //月份         
"d+" : this.getDate(), //日         
"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
"H+" : this.getHours(), //小时         
"m+" : this.getMinutes(), //分         
"s+" : this.getSeconds(), //秒         
"q+" : Math.floor((this.getMonth()+3)/3), //季度         
"S" : this.getMilliseconds() //毫秒         
};         
var week = {         
"0" : "/u65e5",         
"1" : "/u4e00",         
"2" : "/u4e8c",         
"3" : "/u4e09",         
"4" : "/u56db",         
"5" : "/u4e94",         
"6" : "/u516d"        
};         
if(/(y+)/.test(fmt)){         
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
}         
if(/(E+)/.test(fmt)){         
    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
}         
for(var k in o){         
    if(new RegExp("("+ k +")").test(fmt)){         
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
    }         
}         
return fmt;         
}       
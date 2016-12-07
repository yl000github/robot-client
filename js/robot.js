var httpRequest="http://localhost:7080/robot/";
var Timer=function(id){
	this.dom=null;
	this.dom=$(id);
};
Timer.prototype.start=function(seconds,successCB){
	console.log(seconds)
	this.dom.timer({
		duration:seconds+'s',
//		seconds:10,
		countdown:true,
		callback:successCB
	});
};
Timer.prototype.pause=function(){
	this.dom.timer('pause');
};
Timer.prototype.resume=function(){
	this.dom.timer('resume');
};
Timer.prototype.remove=function(){
	this.dom.timer('remove');
};
Timer.prototype.show=function(){
	this.dom.modal();
};
var timer=null;
$(function(){
	console.log("init");
	timer=new Timer('#countdownTimer');
//	openTimer(2);
//	showWait();
});
function openTimer(seconds){
	console.log("openTimer")
	$('#myModal').modal('show');
	timer.start(seconds,function(){
		$('#myModal').modal('hide');
	});
}
function showWait(){
	//等待时间
	$('#myModal').modal('show');
	$("#myModalLabel").html("等待时间");
	console.log($("#startWait").val());
	var startWait=parseInt($("#startWait").val())/1000;
	var duration=parseInt($("#duration").val())/1000;
	timer.start(startWait+duration,function(){
		timer.remove();
		$('#myModal').modal('hide');
//		//持续时间
//		$("#myModalLabel").html("持续时间");
//		timer.start($("#duration").val()/1000,function(){
//			$('#myModal').modal('hide');
//		});
	});
	setTimeout(function(){
		console.log("run")
		$("#myModalLabel").html("持续时间");
	},startWait*1000);
	console.log("complete")
}
function getParam(){
//	console.dir($("#filePath"))
	return {
		"filePath":$("#filePath").val(),
		"duration":$("#duration").val(),
		"startWait":$("#startWait").val()
	}
}
function record(){
	var param=getParam();
	console.dir(param);
	$.ax(httpRequest+"enabler/robot_record",param,function(data){
		console.log(data);
	});
	showWait();
}
function reappear(){
	var param=getParam();
	console.dir(param);
	$.ax(httpRequest+"enabler/robot_reappear",param,function(data){
		console.log(data);
	});
	showWait();
}
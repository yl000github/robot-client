$(function(){
	$("#run").click(run);
});
var httpRequest="http://localhost:7080/robot/";
var taskMap={
	"cxbt-quotation-1":"enabler/cxbt-autocomplete",
}
function run(){
//	alert('1')
	var task=$("#task").val();
	var url=taskMap[task];
	$.ax(httpRequest+url,{},function(data){
		console.log(data);
	});
}
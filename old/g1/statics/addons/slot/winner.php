<?php
  	$lang = isset($_GET["lang"]) ? $_GET["lang"] : "zh-chs";
  	$type = isset($_GET["type"]) ? $_GET["type"] : 1;
   $c_event_id = isset($_GET["c_event_id"]) ? $_GET["c_event_id"] : "";
   
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WINNER</title>
<link href="css/App_slot.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<style type="text/css">
<?php 
	if($lang=="en"){
		echo 'body{ font-family:Arial, Helvetica, sans-serif; font-weight:bold; }';
	}else{
		echo 'body{font-family:"Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu;}';
	}
?>
html, body{ overflow:hidden;}
</style>
</head>
<body>
<div class="WindowSize" style="height:auto;">
<Div style="width:840px; margin-left:auto; margin-right:auto; text-align:center; height:150px; padding-bottom:50px;">
   <img src="images/winner_h.jpg" /> 
</Div>
 	<div style="width:516px; margin-left:auto; margin-right:auto;">
 
    

    	<div style="width:500px; height:500px; border:4px solid #F1BE0D; box-shadow:0px 0 10px #000; position:relative;" id="timePush" time="0">
        	<img src="images/gl_logo.jpg" width="500" height="500" id="ImageWinner"  />
        <!--	<div style=" height:70px; color:#FCFC00; position:absolute; width:100%; text-align:center; bottom:0; left:0; line-height:70px; font-size:30px; font-weight:bold; background:#000; opacity:0.6" id="name"></div>-->
        </div>
    

    </div>
  
</div>
<script type="text/javascript">
$(function(){
	var lang = "<?php echo $lang; ?>", type= "<?php echo $type; ?>", c_event_id = "<?php echo $c_event_id; ?>" ;
	setInterval(function(){ajaxdata(lang,type,c_event_id); },6000);		
	
	winner();
})
var ArrPush = saveDel= [], 
	timed = null;
function ajaxdata(lang,type,c_event_id){
	 var otime = $("#timePush").attr("time");
				  var jsonObject = {
						'type': type,
						'lang': lang,
						'c_event_id': c_event_id,
						'action':'get_winner',	
						'time': otime
      		  };
			$.ajax({
				type: 'get',
				url: '/?m=api&a=do_c_card_question',
				data: jsonObject,
				timeout: 90000,
				cache: false,
				async: false,
				beforeSend: function() {},
				dataType: 'json',
				success: function(o) {
						if(o.length > 0){
							$("#timePush").attr("time",o[o.length-1].time);
							for(var i =0; i < o.length; i++){
									ArrPush.push(o[i]);
								}
						}
				}
			}) 
		}
function winner(){
		if(timed){
				clearTimeout(timed);
			}
		var ilength = ArrPush.length, en;
		if(ilength > 0 ){
				var httpUrl = "http://223.5.3.235/hphoto/"+ArrPush[0].image+"w600_h600.jpg";
				$("#ImageWinner").fadeOut(800,function(){
					$(this).attr("src",httpUrl);
			//		$("#name").text(ArrPush[0].nickname);		
					$(this).fadeIn();
					$(this).error(function(){	$(this).attr("src","images/gl_logo.jpg");})
					ArrPush.shift();							   
				})
				
			
				
			//	saveDel.push(en);
			}	
		timed = setTimeout(function(){winner()},8000);
}

</script>
</body>
</html>

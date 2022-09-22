<?php
  $lang = isset($_GET["lang"]) ? $_GET["lang"] : "zh-chs";
  $type = isset($_GET["type"]) ? $_GET["type"] : 7;
   $c_event_id = isset($_GET["c_event_id"]) ? $_GET["c_event_id"] : "";
    $n = isset($_GET["n"]) ? $_GET["n"] : 36;
    $l = isset($_GET["l"]) ? $_GET["l"] : 9;
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Slot Machine</title>
<link href="css/App_slot.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/slot_<?php echo $lang; ?>.js"></script>
<style type="text/css">
<?php 
	if($lang=="en"){
		echo 'body{ font-family:Arial, Helvetica, sans-serif; font-weight:bold; }';
	}else{
		echo 'body{font-family:"Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu;}';
	}
?>
</style>
<SCRIPT language=javascript type=text/javascript>
<!--
document.oncontextmenu=new Function('event.returnValue=false;');
document.onselectstart=new Function('event.returnValue=false;');
-->
  </SCRIPT>
</head>
<body>
<div class="WindowSize" style=" margin-left:20px; margin-top:50px;">
  <div  class="LeftSlot BoxSkin">
    <div class="Dbox" style="left:20px; " id="Dbox1"> <img src="images/<?php echo $type; ?>/skin1.png" alt="" style="" /><img class="slotSpinAnimation" alt="" src="images/ani.gif">
      <div class="DboxBg"></div>
    </div>
    <div class="Dbox" style="left:330px;" id="Dbox2"><img src="images/<?php echo $type; ?>/skin1.png" alt="" /><img class="slotSpinAnimation" alt="" src="images/ani.gif">
      <div class="DboxBg"></div>
    </div>
    <div class="Dbox" style="left:640px;" id="Dbox3"><img src="images/<?php echo $type; ?>/skin1.png" alt="" /><img class="slotSpinAnimation" alt="" src="images/ani.gif">
      <div class="DboxBg"></div>
    </div>
    
    
    
  </div>
  <div  class="LeftSlot BoxSkin" style="z-index:999; display:none;" id="DotextRan">
  	
  		<div style=" color:#E9E9E9; font-size:34px; font-family: 'Microsoft YaHei' !important;  padding-top:160px;">
        <?php 
		if($lang=="en"){
		?>
        	<span style="font-size:40px; color:#EBC838">Congratulations! You won:</span><br />
           	<span style="font-size:60px; color:#EBC838; display:none;" id="ranking_3">Participation Award</span>
            <span style="font-size:60px; color:#EBC838;  display:none;" id="ranking_2">Second Prize</span>
            <span style="font-size:60px; color:#EBC838;  display:none;" id="ranking_1">First Prize</span>
            <br /><br />
            Please follow us on Weibo:<br />  <span style="color:#EBC838">@DOMOTEXasia</span>
          <?php 
		}else{
		  ?>
          <span style="font-size:40px; color:#EBC838">恭喜您获得</span><br />
           	<span style="font-size:60px; color:#EBC838; display:none;" id="ranking_3">参与奖</span>
            <span style="font-size:60px; color:#EBC838; display:none;" id="ranking_2">二等奖</span>
            <span style="font-size:60px; color:#EBC838; display:none;" id="ranking_1">一等奖</span>
            <br /><br />
            了解实时展会更新信息,<br />
            请关注展会官方微博：<span style="color:#EBC838">@DOMOTEXasia</span>
           <?php 
			}
		  ?>
        </div>
        <div style=" display: block; height: 74px; width: 181px; background:url(images/sure_<?php echo $lang; ?>.png) no-repeat scroll left top; margin-left:auto; margin-right:auto; margin-top:50px; cursor:pointer;" onclick="DotextRanClose()"></div>
  </div>
  <div class="StopBtnDiv">
    <div class="StartOneClassDiv"><div  class="stopClass_gray_<?php echo $lang; ?>" id="OneGrayStop1"></div><div  class="stopClass_<?php echo $lang; ?>" id="OneStop1" style="display:none;"></div></div>
    <div class="StartOneClassDiv" style=" margin:0 45px;"><div  class="stopClass_gray_<?php echo $lang; ?>"  id="OneGrayStop2"></div><div  class="stopClass_<?php echo $lang; ?>" id="OneStop2" style="display:none;"></div></div>
    <div class="StartOneClassDiv" style=" margin:0 0 0 80px;"><div  class="stopClass_gray_<?php echo $lang; ?>"  id="OneGrayStop3"></div><div  class="stopClass_<?php echo $lang; ?>" id="OneStop3" style="display:none;"></div></div>
  </div>
  <div class="RightTop BoxSkin">
    <div><img src="images/title_<?php echo $type ?>.png" width="189" height="281"  style="margin-top:20px;"></div>
    <div style="padding-top:60px; clear:both; text-align:center">
      <?php 
    	if($lang =="zh-chs"){ 
		echo '<div  onclick="location.href=\'?lang=en&type='.$type.'&c_event_id='.$c_event_id.'&n='.$n.'&l='.$l.'\'" class="lang_En_gray"></div><div  class="lang_chs"></div>';
       		
        }else{
        	 echo '<div class="lang_En"></div><div onclick="location.href=\'?lang=zh-chs&type='.$type.'&c_event_id='.$c_event_id.'&n='.$n.'&l='.$l.'\'" class="lang_chs_gray"></div>';
        }
    ?>
    </div>
  </div>
  <div class="RightBottom BoxSkin"><div  class="StartALL_<?php echo $lang; ?>" style="cursor:pointer" id="SlotStart"></div><div  class="STopALL_<?php echo $lang; ?>" id="SlotEnd" style="display:none;"></div><div style=" position:absolute; left:-190px; top:-50px; z-index:11; width:226px;  height:261px; background:url(images/spinagain_<?php echo $lang; ?>.png) no-repeat left top; display:none;" id="TryAgain"></div></div>
  
<?php 
	if($lang!="zh-chs"){
		echo '<div style="position:absolute; z-index:13; left:90px; top:140px; display:none " id="winner"><img src="/addons/slot/images/winner.png" width="1022" height="280" /></div>';
		}else{
		echo '<div style="position:absolute; z-index:13; left:90px; top:100px;display:none " id="winner"><img src="/addons/slot/images/winner_zh-chs.png" width="1022" /></div>';		
		}

?>
  
</div>
<!--<div style="width:1260px; height:700px; background:#DFDEDE; position:absolute; left:0; top:0; display:none; z-index:999;  overflow:hidden;" id="QuestIonA">
	<div style="height:230px;  background:#131111; ">
    	<div style="text-align:center; padding-top:15px;"><img src="images/icn/q<?php echo $type; ?>.png" width="120" height="120"  /></div>
        <div style="color:#fff; font-size:32px; text-align:center; font-weight:bold;width:1000px; margin-left:auto; margin-right:auto;" id="QuestIonB" >What is Brazilian beef famous for?What is Brazilian beef </div>
    </div>
    <Div id="AnswerAQ" style="width:1000px; margin-left:auto; margin-right:auto;"></Div>
</div>-->
<div class="WindowSize" id="WindowSizeBox12" style="height:auto; position:absolute; left:0; top:0; z-index:999; background:#4A4545 url(images/bg.png) repeat-x left top; display:none;">
<Div style="width:840px; margin-left:auto; margin-right:auto; text-align:center; height:150px; padding-bottom:50px;">
   <img src="images/winner_h.jpg" /> 
</Div>
 	<div style="width:516px; margin-left:auto; margin-right:auto; position:relative">
    	<div style="width:500px; height:500px; border:4px solid #F1BE0D; box-shadow:0px 0 10px #000; position:relative;" id="timePush" time="0">
        	<img src="images/gl_logo.jpg" width="500" height="500" id="ImageWinner"  />
        	<!--<div style=" height:70px; color:#FCFC00; position:absolute; width:100%; text-align:center; bottom:0; left:0; line-height:70px; font-size:30px; font-weight:bold; background:#000; opacity:0.6" id="name"></div>-->
            <div style="width:110px; position:absolute; right:-140px; bottom:0px;">
            	<Div style=" color:#C6713D; font-weight:bold; font-size:24px; padding-bottom:15px;">
				<?php if($lang=="en")
				{
					echo "Play <br />Again";
					}else{
					echo "再玩一次";		
				}
				?></Div>
                <div style="background:url(images/playagain.png) no-repeat left top; width:110px; height:110px; cursor:pointer" onClick="pdata.Close()"></div>
            </div>
        </div>
    

    </div>
  
</div>
<script type="text/javascript">
var lang = "<?php echo $lang; ?>", type= "<?php echo $type; ?>", c_event_id = "<?php echo $c_event_id; ?>",pagelie = "<?php echo $l; ?>",pnum = "<?php echo $n; ?>";
$(function(){
		//pdata.ajaxdata(lang,type,c_event_id); 
	//pdata.Answer(0,"11")
})
</script>
<script type="text/javascript" src="js/slot_data.js"></script>
<script type="text/javascript" src="js/slot1.js"></script>

</body>
</html>

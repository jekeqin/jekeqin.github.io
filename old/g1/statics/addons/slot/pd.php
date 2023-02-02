<?php
  $lang = isset($_GET["lang"]) ? $_GET["lang"] : "zh-chs";
  $type = isset($_GET["type"]) ? $_GET["type"] : 1;
   $c_event_id = isset($_GET["c_event_id"]) ? $_GET["c_event_id"] : "";
  	 $n = isset($_GET["n"]) ? $_GET["n"] : 36;
    $lie = isset($_GET["l"]) ? $_GET["l"] : 9;
	 $w = isset($_GET["w"]) ? $_GET["w"] : 1200;
    $h = isset($_GET["h"]) ? $_GET["h"] : 650;
	$qid = isset($_GET["qid"]) ? $_GET["qid"] : "";
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>knowledge of Brazil</title>
<link href="css/App_slot.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/slot_<?php echo $lang; ?>.js"></script>
<style type="text/css">
html{ overflow:hidden;}
body{ overflow:hidden}
#PersonList{ overflow:hidden;}
.person{ width:120px; height:120px; float:left; display:block; position:relative; cursor:pointer}
.kitimg img{ width:120px; height:120px;}
.kittxt{position:absolute; z-index:1; bottom:0; text-align:center; left:0; height:20px; line-height:20px; opacity:0.5; font-size:14px; color:#fff; font-family:Tahoma, Geneva, sans-serif; width:120px; overflow:hidden; background-color:#000; display:none;}

#page div{ padding:10px 20px;  margin:0 10px; text-decoration:none; display:block; border:1px solid #1E1D1D; background-color:#323234; color:#EFEFEF; float:left; border-radius:5px; font-size:20px; line-height:26px;}
#page div.hoveraClass{ padding:10px 20px;  margin:0 10px; text-decoration:none; display:block; border:1px solid #1E1D1D; background-color:#EF8801; color:#EFEFEF; float:left; border-radius:5px; font-size:20px; line-height:26px;}
#PersonList .pdbox{ float:left; display:block;}
.mbRight{ width:41px; height:41px; position:absolute; right:0; top:0; background:url(images/right.png) no-repeat left top; z-index:99; display:none;}
.btnub{ width:88px; height:88px; overflow:hidden; background:url(images/ok1.png) no-repeat left top; display:block; position:absolute; right:10px; top:15px; cursor:pointer; display:none;}

<?php 
	if($lang=="en"){
		echo 'body{ font-family:Arial, Helvetica, sans-serif; font-weight:bold; }';
	}else{
		echo 'body{font-family:"Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu;}';
	}
?>

</style>
</head>
<body>

<div style="width:<?php echo $w; ?>px; height:<?php echo $h; ?>px; position:relative; z-index:1000;">
<div style="width:86%; margin-left:auto; margin-right:auto;">
<div style="font-size:40px; color:#EECA37; padding:20px; height:70px; line-height:70px; font-weight:bold; position:relative;"><div class="btnub" onClick="pdatacd.Winner('<?php echo $qid; ?>','<?php echo $c_event_id; ?>')" id="btnub"></div><?php 
	if($lang == "en"){
		echo "Please select your photo";
		}else{
		echo "请选择您的照片";	
		}
?></div>
<Div id="boxIs" style="overflow:hidden; position:relative">
<div id="PersonList" style="margin-left:0;">
	
</div>
</Div>
<div style="text-align:center; padding-top:20px;" ><table border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;">
  <tr>
    <td  align="center"><div id="page"></div></td>
  </tr>
</table>
</div>
</div>
</div>
<input type="hidden" id="c_member_id" value="">
<script type="text/javascript" src="js/slot_ifm_data.js"></script>

<script type="text/javascript">
var lang = "<?php echo $lang; ?>", type= "<?php echo $type; ?>",c_event_id = "<?php echo $c_event_id; ?>",pageNum="<?php echo $n; ?>", l="<?php echo $lie; ?>", qid = "<?php echo $qid; ?>";
$(function(){
		pdatacd.getPerson(lang,type,c_event_id,pageNum,l,qid);   
})
</script>
</body>
</html>

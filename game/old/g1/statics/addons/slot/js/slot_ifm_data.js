// JavaScript Document
var pdatacd ={
		getPerson:function(lang,type,c_event_id,pageNum,rownum,qid){
				  var jsonObject = {
					'c_event_id': c_event_id,
					'photo_wall': '2',
					'lasttime': '0',
					'users':1000
				  };
				$.ajax({
				type: 'get',
				url: '/?m=api&a=do_e_memory_game',
				data: jsonObject,
				timeout: 90000,
				cache: false,
				async: false,
				beforeSend: function() {},
				dataType: 'json',
				success: function(o) {
						if(o.length > 0 ){
							var AllLength = o.length, allpage = parseInt(AllLength/pageNum)+1;
							var em = 1; 
							var mBoxString = "",uhide = "", pageString="", rowwidth = 120*rownum; 
								$("#PersonList").css("width", rowwidth*allpage);
								$("#boxIs").css("width", rowwidth);
								for(var i=0; i<AllLength; i++){
									if(i % pageNum == 0 ){
										if(i != 0){
												mBoxString+="</div>";
											//	uhide="left:"+rowwidth+"px;"
											}
											mBoxString +="<div id='pdBox_"+em+"' class='hide pdbox' style=' width:"+rowwidth+"px' >";
										}
										mBoxString += '<div class="person" onclick="pdatacd.SelectWinner('+o[i].id+','+qid+','+c_event_id+',this)"><div class="kitimg" style="position:absolute; z-index:0;"><img src="'+o[i].url+'" id="C_Image_'+o[i].id+'"></div><div class="mbRight"></div></div>';
										if(i % pageNum == 0 ){
											em++;
										
										}
									}
									mBoxString+="</div>";
								$("#PersonList").html(mBoxString);
								for(var j=1; j <= allpage; j++){
										if(j == 1){
											pageString +="<div class='hoveraClass' onclick='pdatacd.PerAnimate("+j+","+rownum+",this)'>"+j+"</div>"
											}else{
											pageString +="<div href='javascript:void(0)' onclick='pdatacd.PerAnimate("+j+","+rownum+",this)'>"+j+"</div>"
										}
									}
								$("#page").html(pageString);
								$("img").error(function(){
									$(this).attr("src","images/gl_logo.jpg")						
								})
							}else{
								$("#PersonList").html("还没有人签到^_^");	
							}
				}
			})
		},
		PerAnimate: function(curNum,rownum,o){
				var maleft = rownum* 120;
				$(o).siblings("div").removeClass("hoveraClass");
				$(o).addClass("hoveraClass");
				$("#PersonList").animate({"marginLeft":-(maleft*(curNum-1))},800);
			},
		SelectWinner:function(c_member,qid,c_event_id,o){
				$(".mbRight").hide();
				$("#btnub").show();
				$(o).find(".mbRight").show();
				$("#c_member_id").val(c_member);
			},
		Winner:function(qid,c_event_id){
			var c_member = $("#c_member_id").val();
			if(c_member==""){
					return;
				}
				  var jsonObject = {
					'c_event_id': c_event_id,
					'action': 'add',
					'qus_id':qid,
					'mem_id':c_member
				  };
				$.ajax({
				type: 'get',
				url: '/?m=api&a=do_c_card_question',
				data: jsonObject,
				timeout: 90000,
				cache: false,
				async: false,
				beforeSend: function() {},
				success: function(o) {
						if(o=="SUCCESS"){
							var url = $("#C_Image_"+c_member).attr("src"),
						//		name = $("#C_Text_"+c_member).text(),
								url = url.replace(/(w120_h120\.jpg)/gi,"w600_h600.jpg");
					//			console.log(url);
								parent.pdata.WinnerAlert(url);
							//	parent.pdata.Alert(StaticString[8]);
							}else{
							  parent.pdata.Alert("此问题你已回答！");	
								}
					}
				})
			}
}
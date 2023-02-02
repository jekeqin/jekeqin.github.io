(function($){
	var slotMachine = function() {
		var credits = 0,
			spinning = 3,
			spin = [0,0,0],
			spin = function() {
				this.blur();
				$("#TryAgain").hide();
				$('#SlotStart').hide();
				$("#DotextRan").hide();
				if (spinning == false) {
					$('#SlotEnd').show();
					//$(".stopClass_gray").hide();
					//$(".stopClass").show();
					$("div[id^=OneGrayStop]").hide();
					$("div[id^=OneStop]").show();
					spinning = 3;
					credits --;
					//$('#slotCredits').html(credits);
					spin[0] = parseInt(Math.random() * 8);
					spin[1] = parseInt(Math.random() * 8);
					spin[2] = parseInt(Math.random() * 8);
					if(spin[0] == spin[1]){
							spin[0] =  parseInt(Math.random() * 8);
						}
					if(spin[1] == spin[2]){
							spin[1] =  parseInt(Math.random() * 8);
						}
						//if(spin[2] == spin[0]){
							//spin[2] =  parseInt(Math.random() * 8);
						//}	
					if(spin[0]==spin[1]==spin[2]){
							spin[0]  = parseInt(Math.random() * 8);
							spin[1] = parseInt(Math.random() * 8);
							spin[2] = parseInt(Math.random() * 8);
						}
					
					
					
			//		console.log(spin[0]+"."+spin[1]+"."+spin[2]);
					//$('#slotTrigger').addClass('slotTriggerDisabled');
					$('img.slotSpinAnimation').show();
					$('#Dbox1 img:first').css('top', - (spin[0] * 280 + 95) + 'px');
					$('#Dbox2 img:first').css('top', - (spin[1] * 280 + 95) + 'px');
					$('#Dbox3 img:first').css('top', - (spin[2] * 280 + 95) + 'px');
					
				}
				return false;
			},
			stopSlot = function(StratNum){
					$('#SlotStart').show();
					$('#SlotEnd').hide();
					$("#DotextRan").hide();
					if(StratNum!=0){
							$("#OneGrayStop"+StratNum).show();
							$("#OneStop"+StratNum).hide();
							setTimeout(function(){
								stopSpin(StratNum);
							},  parseInt(1500 * Math.random()));
						}else{
								$("div[id^=OneGrayStop]").show();
								$("div[id^=OneStop]").hide();
							setTimeout(function(){
								stopSpin(1);
							},  parseInt(1500 * Math.random()));
							setTimeout(function(){
								stopSpin(2);
							},  parseInt(1500 * Math.random()));
							setTimeout(function(){
								stopSpin(3);
							}, parseInt(1500 * Math.random()));
						}
				},
			stopSpin = function(slot) {
				$('#Dbox' + slot)
					.find('img:last')
						.hide()
						.end()
					.find('img:first')
						.animate({
							top: - spin[slot - 1] * 280
						},{
							duration: 500,
							easing: 'elasticOut',
							complete: function() {
								spinning --;
								if (spinning == 0 ) {
									endSpin();
								}
							}
						});
			},
			endSpin = function() {
				//console.log(spin[0]+"."+spin[1]+"."+spin[2]);
				if((spin[0]==spin[1]) && (spin[0]==spin[2]) && (spin[1]==spin[2])){
								//setTimeout(function(){pdata.RandQuestion(2);},500)
								$("#winner").show();
								setTimeout(function(){pdata.GetWinner(1);	$("#winner").hide();},700)
					}else{
					if((spin[0]==spin[1]) || (spin[0]==spin[2]) || (spin[1]==spin[2])){
								//setTimeout(function(){pdata.RandQuestion(1);},500)
								setTimeout(function(){pdata.GetWinner(2);},500)
						}else{
							
							setTimeout(function(){pdata.GetWinner(3);},500)
						//$("#TryAgain").show();
						//setTimeout(function(){pdata.RandQuestion(0);},500)
					}	
						
				}
				
				return;
			
			};
		return {
			init: function() {
				spinning = false;
			//	$('#slotSplash a').bind('click', startSlot);
					$('#SlotStart').bind('click', function(){spinning = false; spin()});
					//.bind('mousedown', function(){
					//	$(this).addClass('slotTriggerDown');
					//})
					$('#SlotEnd').bind('click',  function(){stopSlot(0)});
					$('#OneStop1').bind('click', function(){stopSlot(1)});	
					$('#OneStop2').bind('click', function(){stopSlot(2)});	
					$('#OneStop3').bind('click',function(){stopSlot(3)});	
				//$(document).bind('mouseup', function(){
					//$('#slotTrigger').removeClass('slotTriggerDown');
				//});
				$('#Dbox1 img:first').css('top', - (parseInt(Math.random() * 8) * 280) + 'px');
				$('#Dbox2 img:first').css('top', - (parseInt(Math.random() * 8) * 280) + 'px');
				$('#Dbox3 img:first').css('top', - (parseInt(Math.random() * 8) * 280) + 'px');
			}
		};
	}();
	$.extend($.easing,{
		bounceOut: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeOut:function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		elasticOut: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-140*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		}
	});
	$(document).ready(slotMachine.init);
})(jQuery);
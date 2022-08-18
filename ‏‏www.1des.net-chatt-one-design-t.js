$(`<style>#mic.kbar3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #c40000 0%, #000 29%, #f00 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
$("style").last().append(`
#users.kbar1 .inroom.uzr{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#ecd3d329 67%,#fff 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}#users.kbar1 .inroom.uzr img.ustat{width:10px!important;height:10px;border-radius:50%}#d2.kbar2 .uzr .fitimg.u-pic,#users.kbar1 .inroom.uzr .fitimg.u-pic{border:1px solid #fff;margin-top:2px;border-radius:5px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;}#users.kbar1 .inroom.uzr .u-msg{text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}#users.kbar1 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#b30101 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.kbar1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.kbar2 .uzr.d-flex.mm{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
#mic0.kbar4::before {content: "(1)";color: black;background-color: #ffa5a5;font-size: 12px;}
#mic1.kbar5::before {content: "(2)";color: black;background-color: #ffa5a5;font-size: 12px;}
#mic2.kbar6::before {content: "(3)";color: black;background-color: #ffa5a5;font-size: 12px;}
#mic3.kbar7::before {content: "(4)";color: black;background-color: #ffa5a5;font-size: 12px;}
#mic4.kbar8::before {content: "(5)";color: black;background-color: #ffa5a5;font-size: 12px;}
`);
var room_set = false;
setInterval(function () {
    if (myroom == '17fdc8ef597x92764b87-x-mu6pwv') {
        if (room_set == false) {
            room_set = true;
		$('#users').addClass('kbar1');
		$('#d2').addClass('kbar2');
		$('#mic').addClass('kbar3');
		$("#mic0").addClass('kbar4');
		$("#mic1").addClass('kbar5');
		$("#mic2").addClass('kbar6');
		$("#mic3").addClass('kbar7');
		$("#mic4").addClass('kbar8');
        }
    } else {
        if (room_set == true) {
            room_set = false;
                $("#users").removeClass('kbar1');
		$("#d2").removeClass('kbar2');
		$('#mic').removeClass('kbar3');
		$("#mic0").removeClass('kbar4');
		$("#mic1").removeClass('kbar5');
		$("#mic2").removeClass('kbar6');
		$("#mic3").removeClass('kbar7');
		$("#mic4").removeClass('kbar8');
        } 
    } 
}, 500)

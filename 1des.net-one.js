﻿$(`<style>#mic.room3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #e34385 0%, #000000 29%, #ff75a2 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.room1 .inroom.uzr{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}#users.room1 .inroom.uzr img.ustat{width:10px!important;height:10px;border-radius:50%}#d2.room2 .uzr .fitimg.u-pic,#users.room1 .inroom.uzr .fitimg.u-pic{border:1px solid #fff;margin-top:2px;border-radius:5px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff0060}#users.room1 .inroom.uzr .u-msg{text-align:center;background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff0066ab 25%,#000 50%,#c90051b8 50%,#ff006600 75%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000}#users.room1 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#ff1361 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.room1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.room2 .uzr.d-flex.mm{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#ff00780d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}`);
var room_set = false;
setInterval(function () {
    if (myroom == '180b31492f9x922d0131xn7fcg1') {
        if (room_set == false) {
            room_set = true;
			$('#users').addClass('room1');
			$('#d2').addClass('room2');
			$('#mic').addClass('room3');
        }
    } else {
        if (room_set == true) {
            room_set = false;
                        $("#users").removeClass('room1');
			$("#d2").removeClass('room2');
			$('#mic').removeClass('room3');
        } 
    } 
}, 1000);

newstyle = false
var itv = setInterval(function () {
  if (myid != null && newstyle == false) {
    clearInterval(itv)
    newstyle = true
	
	
$("#mic").append('<input id="rdark_mod" class="r_mod" type="checkbox" style="display:none;">');

$("#rdark_mod").click(() => {
  $(".one5").toggleClass("one6");
}); 
	
	  }
}, 1000);

$("style").last().append(`
#rdark_mod.r_mod.one4 {
  -webkit-appearance: none;
  outline: none;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  position: relative;
  transition: 0.4s;
  background: url("https://i.ibb.co/3SnPT0J/sun.png")
  no-repeat center #212121;
  background-size: 25px;
  cursor: pointer;
  margin-top: 8px !important;
}
#rdark_mod.r_mod.one4:checked {
  background: url("https://i.ibb.co/smDBC4X/moon.png")
  no-repeat center #000;
  background-size: 25px;
  
}
.one6{
  background-color: #555;
  transition: background-color 0.5s ease;
}
#rdark_mod.r_mod.one4 {
display: flex !important;
}






#users.one6 .uzr {
  background-color: #555 !important;
}



#dpnl.one6 .nosel.ninr.fl.uzr.label.bg {
  background-color: #555;
}


#settings.one6 .borderg.corner {
  background-color: #555 !important;
  border: 0px solid #f4f4f4;
}


#d2.one6 .u-msg.break {
  color: #d7d7d7 !important;
}


#d2.one6 .nosel.u-topic.dots.hand {
  color: #000 !important;
}


#users.one6 .uzr {
  background-color: #555 !important;
}



#dpnl.one6 .nosel.ninr.fl.uzr.label.bg {
  background-color: #555;
}


#settings.one6 .borderg.corner {
  background-color: #555 !important;
  border: 0px solid #f4f4f4;
}


#d2.one6 {
  background-color: #3e3e3e !important;
}


#settings.one6 .label-primary, .btn-primary, .bg-primary {
  background-color: #2f2f2f;
}


#d0.one6 .label-primary, .btn-primary {
  background-color: #2f2f2f;
}


#muteall.one6 {
  background-color: mediumseagreen !important;
}


#rooms.one6 .label-primary, .btn-primary {
  background-color: #2f2f2f;
}


#users.one6 .tbox {
    background-color: #8a8a8a;
}

#room.one6 #mic {
  background-color: #555;
}

#room.one6 #mic .mic, #muteall {
  background-color: #2F2F2F;
}


#room.one6 .break {
  background-color: #555;
}


#room.one6 .tablebox.d-flex.footer.fl.light {
  background-color: #959595;
}



`);
var r_one = false;
setInterval(function () {
    if (myroom == '180b31492f9x922d0131xn7fcg1') {
        if (r_one == false) {
            r_one = true;
		$('#rdark_mod').addClass('one4');
		$('#room, #d2, #d0, #rooms, #users, #dpnl, #settings, #chats, #mic #muteall ').addClass('one5');
		$('#room, #d2, #d0, #rooms, #users, #dpnl, #settings, #chats, #mic #muteall ').addClass('one6');
        }
    } else {
        if (r_one == true) {
            r_one = false;
	    $("#rdark_mod").removeClass('one4');
	    $("#room, #d2, #d0, #rooms, #users, #dpnl, #settings, #chats, #mic #muteall ").removeClass('one5');
	    $("#room, #d2, #d0, #rooms, #users, #dpnl, #settings, #chats, #mic #muteall ").removeClass('one6');
        } 
    } 
}, 10);

$(`<style>#mic.one3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #e34385 0%, #000000 29%, #ff75a2 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.one1 .inroom.uzr{
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe
}
#users.one1 .inroom.uzr img.ustat{
width:10px!important;
height:10px;border-radius:50%
}
#d2.one2 .uzr .fitimg.u-pic,#users.one1 .inroom.uzr .fitimg.u-pic{border:1px solid #fff;margin-top:2px;border-radius:5px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff0060}#users.one1 .inroom.uzr .u-msg{text-align:center;background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff0066ab 25%,#000 50%,#c90051b8 50%,#ff006600 75%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000}#users.one1 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#ff1361 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.one1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.one2 .uzr.d-flex.mm{background-size: auto;border-radius:5px;border:1px solid #fffefe6b;border-bottom:1px solid #fffefe00}`);
var r_one = false;
setInterval(function () {
    if (myroom == '180b31492f9x922d0131xn7fcg1') {
        if (r_one == false) {
            r_one = true;
		$('#users').addClass('one1');
		$('#d2').addClass('one2');
		$('#mic').addClass('one3');
        }
    } else {
        if (r_one == true) {
            r_one = false;
      $("#users").removeClass('one1');
	    $("#d2").removeClass('one2');
	    $('#mic').removeClass('one3');
        } 
    } 
}, 10);


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
#users.kbar1 .inroom.uzr{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#ecd3d329 67%,#fff 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
#users.kbar1 .inroom.uzr img.ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: -1px;
  min-height: 0% !important;
}
#users.kbar1 .inroom.uzr .fitimg.u-pic {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;
  border: 1px solid #fff;
  border-radius: 50px;
  margin-top: -1px;
  z-index: 0;
  margin-left: -53px;
}
#d2.kbar2 .uzr .fitimg.u-pic{border:1px solid #fff;margin-top:2px;border-radius:5px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;}#users.kbar1 .inroom.uzr .u-msg{max-height: 25px !important;text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}#users.kbar1 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#b30101 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.kbar1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.kbar2 .uzr.d-flex.mm{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
`);
var r_kbar = false;
setInterval(function () {
    if (myroom == '17fdc8ef597x92764b87-x-mu6pwv') {
        if (r_kbar == false) {
            r_kbar = true;
		$('#users').addClass('kbar1');
		$('#d2').addClass('kbar2');
		$('#mic').addClass('kbar3');
        }
    } else {
        if (r_kbar == true) {
            r_kbar = false;
                $("#users").removeClass('kbar1');
		$("#d2").removeClass('kbar2');
		$('#mic').removeClass('kbar3');
        } 
    } 
}, 10);


$(`<style>.nosel.d-flex.room.r17ef32d2603xebed46b3-xfg0v0d .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
  letter-spacing: 1px;
  -webkit-text-fill-color: #000;
  background-image: url(https://i.ibb.co/rm5vwJS/444444erwe.png);
  padding: 0px !important;
  border-radius: 50px !important;
}.nosel.d-flex.room.r17ef32d2603xebed46b3-xfg0v0d {display: inline-block;background-image: linear-gradient(-225deg, rgb(255, 250, 202) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(255, 242, 173) 100%);border-radius: 0px 0px 15px 15px;}
.nosel.d-flex.room.r17ef32d2603xebed46b3-xfg0v0d .dots.mini.u-msg{text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#ff9b0000;background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff9b00 25%,#000000 50%,#ff9b00 50%,#ff006600 75%)}.nosel.d-flex.room.r17ef32d2603xebed46b3-xfg0v0d .fitimg.u-pic.borderg{border-radius:100px;border:2px solid #ffcb50;padding-top:30px}.nosel.d-flex.room.r17ef32d2603xebed46b3-xfg0v0d .u-topic.dots{font-weight:900;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);background-size:300% 300%;-webkit-background-clip:text;-webkit-text-fill-color:#0000;line-height:2;animation:grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite}@keyframes grad{0%{background-position:14% 0}50%{background-position:87% 100%}100%{background-position:14% 0}
</style>`).insertBefore('body');
var rid='17ef32d2603xebed46b3-xfg0v0d';
$("style:eq(0)").append(`#d2 .roomh[onclick="rjoin('${rid}')"]{background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);
background-size: 220% auto;animation: textclip 5s linear infinite;padding: 2px!important;border-radius: 50px !important;border: 1px solid #0000;}`);
$("style:eq(0)").append(`#upro .roomh[onclick="rjoin('${rid}')"]{background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);
background-size: 220% auto;
animation: textclip 5s linear infinite;border-radius: 50px !important;border: 1px solid #0000;}`);
$(`<style>
	#mic.mlok3 .mic{
    border:2px solid;
    border-image: linear-gradient(var(--angle),#e3bb43 0%,#000 29%,#ffbf00 67%,#020202 100%) 1;
	animation:5s rotate linear infinite;
    --angle:0deg;
    background-color:#e3e3e3;
    border-radius:5px!important;
    margin:2px;
    margin-top:1px;
    box-shadow:inset 0 0 0 rgb(0 0 0 / 8%),0 0 1px #fff;height:48px}
    @keyframes rotate{to{--angle:360deg}}@property --angle{syntax:"<angle>";initial-value:0deg;inherits:false}
    </style>`).insertBefore('body');
    $("style").last().append(` 
    #users.mlok1 .inroom.uzr{
        background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);
        border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
        #users.mlok1 .inroom.uzr img.ustat{
            width:10px!important;
            height:10px;
            border-radius:50%}
            #d2.mlok2 .uzr .fitimg.u-pic,#users.mlok1 .inroom.uzr .fitimg.u-pic{
                border:1px solid #fff;
                margin-top:2px;
                border-radius:5px;
                box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ffa700;}
                #users.mlok1 .inroom.uzr .u-msg{
                    text-align:center;
                    background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff0066ab 25%,#000 50%,#c90051b8 50%,#ff006600 75%);
                    background-size:200% auto;
                    -webkit-background-clip:text;
                    -webkit-text-fill-color:#0000}
                    #users.mlok1 .inroom.uzr span.uhash{
                        text-transform:uppercase;
                        background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);
                        background-size:220% auto;
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                        animation:2s linear infinite textclip;
                        display:inline-block}
                        #users.mlok1 .inroom.uzr img.co{
                            transform:rotate(20deg);
                            margin-top:2px!important}
                            #d2.mlok2 .uzr.d-flex.mm{
                                background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#ff00780d 67%,#d7d7d7 100%);
                                border-radius:5px;
                                border:1px solid #fffefe;
                                border-bottom:1px solid #fffefe}`);
                                
                                var r_mlok=false;setInterval(function (){if (myroom=='17ef32d2603xebed46b3-xfg0v0d'){if (r_mlok==false){r_mlok=true;$('#users').addClass('mlok1');$('#d2').addClass('mlok2');$('#mic').addClass('mlok3')}}else{if (r_mlok==true){r_mlok=false;$("#users").removeClass('mlok1');$("#d2").removeClass('mlok2');$('#mic').removeClass('mlok3')}}}, 10);
					
				
								
			

$(`<style>#mic.jil3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #e34385 0%, #000000 29%, #ff75a2 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.jil1 .inroom.uzr{
background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);
border-radius:5px;
border:1px solid #fffefe;
background-image: url("https://j.top4top.io/p_2451279y32.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.jil1 .inroom.uzr img.ustat{
width: 5px !important;
height: 20px;
margin-top: 3px;
}
#d2.jil2 .uzr .fitimg.u-pic,#users.jil1 .inroom.uzr .fitimg.u-pic{
border:1px solid #fff;margin-top:2px;border-radius:5px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #98e893;}

#users.jil1 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.jil1 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#fff 67%,#0e8d37 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.jil1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.jil2 .uzr.d-flex.mm{
background-image: url("https://i.top4top.io/p_2452pkn8w1.png");
background-size: auto;
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_jil = false;
setInterval(function () {
    if (myroom == '1827f756988x83ce3351x-r62nvx') {
        if (r_jil == false) {
            r_jil = true;
			$('#users').addClass('jil1');
			$('#d2').addClass('jil2');
			$('#mic').addClass('jil3');
        }
    } else {
        if (r_jil == true) {
            r_jil = false;
            $("#users").removeClass('jil1');
			$("#d2").removeClass('jil2');
			$('#mic').removeClass('jil3');
        } 
    } 
}, 10);





$(`<style>#mic.north3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #ea5167 0%, #000 29%, #ea5167 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.north1 .inroom.uzr{
border-radius:5px;
border:1px solid #f2b4bd;
background-image: url("https://l.top4top.io/p_24545lyc41.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.north1 .inroom.uzr img.ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px;
  height: 52px;
  margin-top: -1px;
  min-height: 0% !important;
}
#users.north1 .inroom.uzr .fitimg.u-pic {
  border-radius: 50px;
  margin-top: 0px;
  z-index: 0;
  margin-left: -52px;
  min-width: 51px;
  width: 50px;
  min-height: 48px;
  max-height: 50px;
}
#d2.north2 .uzr .fitimg.u-pic{
border:1px solid #ea5167;
margin-top:2px;border-radius:5px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff8181;}

#users.north1 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.north1 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#f00 67%,#0e8d37 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.north1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.north2 .uzr.d-flex.mm{
background-image: url("https://d.top4top.io/p_24543aytl1.png");
background-size: auto;
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_north = false;
setInterval(function () {
    if (myroom == '18330b950ffx9914ab32xqjvcmr') {
        if (r_north == false) {
            r_north = true;
			$('#users').addClass('north1');
			$('#d2').addClass('north2');
			$('#mic').addClass('north3');
        }
    } else {
        if (r_north == true) {
            r_north = false;
            $("#users").removeClass('north1');
			$("#d2").removeClass('north2');
			$('#mic').removeClass('north3');
        } 
    } 
}, 10);


$(`<style>#mic.kium3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #328820 0%, #000 29%, #91ff73 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.kium1 .inroom.uzr{
background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);
border-radius:5px;
border:1px solid #fffefe;
background-image: url("https://g.top4top.io/p_2455xrc3a1.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.kium1 .inroom.uzr img.ustat{
width: 10px !important;
height: 10px;
border-radius: 50px;
margin-top: 3px;
}
#d2.kium2 .uzr .fitimg.u-pic,#users.kium1 .inroom.uzr .fitimg.u-pic{
border:1px solid #48b954;margin-top:2px;border-radius:5px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #98e893;}

#users.kium1 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.kium1 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#fff 67%,#0e8d37 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.kium1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.kium2 .uzr.d-flex.mm{
background-image: url("https://h.top4top.io/p_2455k5xwp2.png");
background-size: auto;
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_kium = false;
setInterval(function () {
    if (myroom == '1833e52886cx17cb8825xrbhosg') {
        if (r_kium == false) {
            r_kium = true;
			$('#users').addClass('kium1');
			$('#d2').addClass('kium2');
			$('#mic').addClass('kium3');
        }
    } else {
        if (r_kium == true) {
            r_kium = false;
            $("#users").removeClass('kium1');
			$("#d2").removeClass('kium2');
			$('#mic').removeClass('kium3');
        } 
    } 
}, 10);


$(`<style>.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
letter-spacing: 1px;
-webkit-text-fill-color: #fff;
background-image: url(https://g.top4top.io/p_2459tqkin1.png);
border-radius: 15px 0px 15px 0px !important;
}
.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee.bord {border-inline: 4px solid #00949b !important;}
.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee {
border-radius: 15px 0px 15px 0px;
display: inline-block;
background-image: linear-gradient(-225deg, rgb(164, 164, 164) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(189, 189, 189) 100%);
}
.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee .dots.mini.u-msg {
text-align: center;
-webkit-text-fill-color: #0000;
background-image: url(https://e.top4top.io/p_245917ytb1.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
}
.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee .fitimg.u-pic.borderg{border-radius: 15px 0px 15px 0px;border: 2px solid #000;letter-spacing: 1px;background-size: 108% 108%;-webkit-text-fill-color: white;animation: grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;}

.nosel.d-flex.room.r1836e4b6d8cxfe167f92-x-hb2mee .u-topic.dots {
text-transform: uppercase;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: inline-block;
font-size: 20px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -2px;
margin-left: 5px;}

@keyframes textclip {to {background-position: 200% center;}}</style>`).insertBefore('body');
var rid='1836e4b6d8cxfe167f92-x-hb2mee';
$("style:eq(0)").append(`#d2 .roomh[onclick="rjoin('${rid}')"]{animation: textclip 5s linear infinite;
border-radius: 50px !important;
border: 1px solid #0000;
font-size: 20px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -3px;}`);
$("style:eq(0)").append(`#upro .roomh[onclick="rjoin('${rid}')"]{padding: 2px !important;
animation: textclip 5s linear infinite;
border-radius: 50px !important;
border: 1px solid #0000;
font-size: 18px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -5px;}`);





$(`<style>#mic.dl33 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #14dfe8 0%, #000 29%, #06ecf7 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
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
#users.dl31 .inroom.uzr{
border-radius: 15px 0px 15px 0px;
border:1px solid #26b6bdc2;
background-image: url("https://e.top4top.io/p_2459wilew1.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.dl31 .inroom.uzr img.ustat {
  width: 54px !important;
  border-radius: 10px 0px 15px 0px;
  height: 52px;
  margin-top: -1px;
  min-height: 0% !important;
}
#users.dl31 .inroom.uzr .fitimg.u-pic {
  border-radius: 15px 0px 15px 0px;
margin-top: 0px;
z-index: 0;
margin-left: -51px;
min-width: 50px;
width: 50px;
min-height: 48px;
max-height: 50px;
}
#d2.dl32 .uzr .fitimg.u-pic{
border:1px solid #14dfe8;
margin-top:2px;
border-radius: 10px 0px 10px 0px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff8181;}

#users.dl31 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.dl31 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#14dfe8 67%,#14dfe8 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.dl31 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.dl32 .uzr.d-flex.mm{
background-image: url("https://h.top4top.io/p_2459znu442.png");
background-size: auto;
border-radius: 15px 0px 15px 0px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_dl3 = false;
setInterval(function () {
    if (myroom == '1836e4b6d8cxfe167f92-x-hb2mee') {
        if (r_dl3 == false) {
            r_dl3 = true;
            $('#users').addClass('dl31');
            $('#d2').addClass('dl32');
            $('#mic').addClass('dl33');
        }
    } else {
        if (r_dl3 == true) {
            r_dl3 = false;
            $("#users").removeClass('dl31');
            $("#d2").removeClass('dl32');
            $('#mic').removeClass('dl33');
        } 
    } 
}, 10);

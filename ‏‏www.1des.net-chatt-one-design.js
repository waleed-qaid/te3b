$("style").last().append(`.one_2 {border: 1px solid white;
margin-top: 2px;
border-radius: 5px;
box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.08), 0 0px 2px #ff0060;
}`);
$("style").last().append(`.one_3 {background-image: linear-gradient(-225deg, #0000 0%, #0000 29%, #f2deeaed 67%, #f2f2f2 100%);
border-radius: 5px;
border: 1px solid #fffefe;
  border-bottom-color: rgb(255, 254, 254);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`);
$("style").last().append(`.one_4 {background-image: linear-gradient(-225deg, #0000 0%, #0000 29%, #a6a6a629 67%, #fff 100%);
border-radius: 5px;
border: 1px solid #fffefe;
  border-bottom-color: rgb(255, 254, 254);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`);
$("style").last().append(`.one_5 {width: 10px!important;
    height: 10px;
    border-radius: 50%;
}`);
$("style").last().append(`.one_6 {border: 1px solid white;
margin-top: 2px;
border-radius: 5px;
box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.08), 0 0px 2px #ff0060;
}`);
$("style").last().append(`.one_7 {background-image: -webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff0066ab 25%,#000000 50%,#c90051b8 50%,#ff006600 75%);
background-size: 200% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: #0000;
}`);
$("style").last().append(`.one_8 {text-transform: uppercase;
background-image: linear-gradient(-225deg, #7b7b7b 0%, #737373 29%, #ff1361 67%, #3600ff 100%);
background-size: 220% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: inline-block;
}`);
$("style").last().append(`.one_9 {transform: rotate(20deg);
margin-top: 2px !important;
}`);
var room_set = false;
setInterval(function () {
    if (myroom == '180b31492f9x922d0131xn7fcg1') {
        if (room_set == false) {
            room_set = true;
			$('#d2 div.fitimg').addClass('one_2');
			$('#d2 div.uzr').addClass('one_3');
			$('#users div.inroom').addClass('one_4');
			$('#users div.inroom img.ustat').addClass('one_5');
			$('#users div.inroom .fitimg.u-pic').addClass('one_6');
			$('#users div.inroom .mini.u-msg').addClass('one_7');
			$('#users div.inroom span.uhash').addClass('one_8');
            $('#users div.inroom img.co').addClass('one_9');
        }
    } else {
        if (room_set == true) {
            room_set = false;
			$('#d2 div.fitimg').removeClass('one_2');
			$('#d2 div.uzr').removeClass('one_3');
			$('#users div.inroom').removeClass('one_4');
			$('#users div.inroom img.ustat').removeClass('one_5');
			$('#users div.inroom .fitimg.u-pic').removeClass('one_6');
			$('#users div.inroom .mini.u-msg').removeClass('one_7');
			$('#users div.inroom span.uhash').removeClass('one_8');
            $('#users div.inroom img.co').removeClass('one_9'); 
        } 
    } 
}, 1000);

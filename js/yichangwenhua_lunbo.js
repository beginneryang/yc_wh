var index=0;
var img_w=$('.ban_l ul li img').width();

var img_first=$('.ban_l ul li').first();
var img_last=$('.ban_l ul li').last();
$('.ban_l ul').append(img_first.clone());
$('.ban_l ul').prepend(img_first.clone());

var img_len=$('.ban_l ul li').length;

$('.ban_l ul').width(img_w*img_len).css('left',-img_w*(index+1)+'px');

function mov(dir){
  $('.ban_l ul').animate({
  	left: dir+'='+img_w+'px',},
  	500, function() {
       if($('.ban_l ul').css('left')=='-'+(img_len-1)*img_w+'px'){
       	  $('.ban_l ul').css('left',-img_w+'px')
       }
       if($('.ban_l ul').css('left')=='0px'){
       	  $('.ban_l ul').css('left',-img_w*(img_len-2)+'px')
       }
  });
}

$('#pert').click(function() {
	 mov('+');
});
$('#next').click(function() {
	 mov('-');
});

var t='';
$('.ban_l').hover(function() {
	clearInterval(t);
}, function() {
	t=setInterval("$('#next').click()",5000);
});

$('.ban_l').mouseout();

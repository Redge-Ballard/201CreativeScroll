var music = new Audio('img/music.mp3');
var victory = new Audio('img/victory.mp3');
var once = true;

function startup() {
	alert("Please enable sound.");
	music.play();
}

function delayedAlert() {
  window.setTimeout(displayEnd, 3000);
}

function displayEnd() {
	$('#flash').css({'background-color':'rgb(255,255,255)'});
    window.setTimeout(fadeout, 1000);
}

function fadeout() {
    if (once = true){
	music.pause();
	victory.play();
    $('#end').css({'display':'block'});
    $(".line").css({'margin-bottom':'50px'});
    $("#way1").css({'margin-top':'50px'});
    $('.piece').css({'display':'none'});
    $('#end').css({'margin-top':'0px'});
	$('#flash').css({'display':'none'});
    }
    once = false;
}

$('#way1').waypoint(function() {	
	$('#end').css({'margin-left':'20%'});
    $('#pant').css({'margin-top':'-450px'})
    $('#way1').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way2').waypoint(function() {
    $('#chest').css({'margin-top':'-450px'})
    $('#way2').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way3').waypoint(function() {
    $('#lfoot').css({'margin-top':'-450px'})
    $('#way3').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way4').waypoint(function() {
    $('#rfoot').css({'margin-top':'-450px'})
    $('#way4').css({'background-image':'url(\'img/line2.png\')'})
    var first = true;
    if (first = true) {
    var audio = new Audio('img/door.mp3');
    audio.play();
    first = false;
	}
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way5').waypoint(function() {
    $('#larm').css({'margin-top':'-450px'})
    $('#way5').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way6').waypoint(function() {
    $('#rarm').css({'margin-top':'-450px'})
    $('#way6').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way7').waypoint(function() {
    $('#lhand').css({'margin-top':'-450px'}) 
    $('#way7').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way8').waypoint(function() {
    $('#rhand').css({'margin-top':'-450px'}) 
    $('#way8').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
}, {
    offset: '50%',
    triggerOnce: true
});

$('#way9').waypoint(function() {
    $('#head').css({'margin-top':'-450px'}) 
    $('#way9').css({'background-image':'url(\'img/line2.png\')'})
    var audio = new Audio('img/door.mp3');
    audio.play();
    delayedAlert();
}, {
    offset: '50%',
    triggerOnce: true
});
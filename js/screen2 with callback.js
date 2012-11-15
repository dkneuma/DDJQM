document.addEventListener("deviceready", onDeviceReady, false);
    
// Cordova is ready
    //
    function onDeviceReady() {
        console.log("Cordova Ready");
    }


//var serviceURL = "http://www.dictiondoctor.com/DDServices/";
var serviceURL = "http://localhost/~daniel.neumann/DDServices/";
$('#screen2Page').live('pageshow', function(event) {
	$.mobile.allowCrossDomainPages = true;
	var id = getUrlVars()["id"];
//	alert("Called with id=" + id);
	console.log(serviceURL+'getword.php?id='+id);
	$.getJSON(serviceURL + 'getletter.php?callback=?','id='+id, function(data){
			var letterdata = data.item;
			var newstring = "Unit "+letterdata.letterID+" "+letterdata.letterIPA;
			$('#lettersound').text(newstring);
	
		});
	$.getJSON(serviceURL + 'getword.php?callback=?','id='+id, function(data){
		
			var screen2data = data.item;
			console.log(screen2data);
			var audiosource = "sounds/w"+screen2data.wordID+".wav";
			$('#audiocontrol').attr('src',audiosource);
			$('#wordbutton').text(screen2data.Name);
			$("#wordbutton").click(function() {
			$("#audiocontrol").get(0).play(); 
			 playAudio(audiosource);
		
			});



		//	$('#wordbutton').refresh;
			$('#IPAbutton').text(screen2data.IPA);
			var screenref = "screen" + screen2data.nextScreenType + ".html?id=" + screen2data.nextScreenID;
			console.log(screenref);
			//$('#navbuttons li').remove();
			//$('#navbuttons').append('<li><a href="'+screenref+'" data-role="button" data-theme="b" id="btnNext">Next</a></li>');
			$('#btnNext').attr('href', screenref);
		//	$('#btnNext').text(screenref);
		//	$('#btnNext').listview('refresh');

	});
	
	
});

var my_media = null;
var mediaTimer = null;

       // Play audio
       //
       function playAudio(src) {
           if (my_media == null) {
               // Create Media object from src
               my_media = new Media(src, onSuccess, onError);
           } // else play current audio
           // Play audio
           my_media.play();
       }


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}








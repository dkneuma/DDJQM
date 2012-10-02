document.addEventListener("deviceready", onDeviceReady, false);
    
// Cordova is ready
    //
    function onDeviceReady() {
        console.log("Cordova Ready");
    }

var serviceURL = "http://localhost/~daniel.neumann/DDServices/";
$('#screen3Page').live('pageshow', function(event) {
	$.mobile.allowCrossDomainPages = true;
	var id = getUrlVars()["id"];
//	alert("Called with id=" + id);
	$.getJSON(serviceURL + 'getdirection.php?id='+id, displayScreen);
	
});

function displayScreen(data) {

	var screen3data = data.item;
	console.log(screen3data);
//	alert("Screen Direction= " + screen3data.directionString);
//	$('#screendirection').append("ChangedText");
//	$('#screendirection')[0].innerHTML=screen3data.directionString;
	$('#screendirection').append(screen3data.directionString);

	var screenref = "screen" + screen3data.nextScreenType + ".html?id=" + screen3data.nextpage;

	$('#btnNext').append('<li><a href="'+screenref+'" data-role="button" data-theme="b" id="btnNext">Next</a></li>');
//	$('#btnNext').attr('href', 'screen3?id='+ screen3data.nextScreenID);
	$('#btnNext').listview('refresh');

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







 
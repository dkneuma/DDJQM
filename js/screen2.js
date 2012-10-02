document.addEventListener("deviceready", onDeviceReady, false);
    
// Cordova is ready
    //
    function onDeviceReady() {
        console.log("Cordova Ready");
    }


var serviceURL = "http://localhost/~daniel.neumann/DDServices/";
$('#screen2Page').live('pageshow', function(event) {
	$.mobile.allowCrossDomainPages = true;
	var id = getUrlVars()["id"];
//	alert("Called with id=" + id);
	$.getJSON(serviceURL + 'getword.php?id='+id, displayWord);
	
});

function displayWord(data) {

	var screen2data = data.item;
	console.log(screen2data);
//	alert("Word= " + screen2data.Name);
//	$('#screendirection').append("ChangedText");
//	$('#screendirection')[0].innerHTML=screen3data.directionString;
	$('#wordbutton').append(screen2data.Name);
//	$('#wordbutton').refresh;
	$('#IPAbutton').append(screen2data.IPA);
	var screenref = "screen" + screen2data.nextScreenType + ".html?id=" + screen2data.nextpage;
	//$('#navbuttons li').remove();
	//$('#navbuttons').append('<li><a href="'+screenref+'" data-role="button" data-theme="b" id="btnNext">Next</a></li>');
	$('#btnNext').attr('href', screenref);
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








document.addEventListener("deviceready", onDeviceReady, false);
    
// Cordova is ready
    //
    function onDeviceReady() {
        console.log("Cordova Ready");
    }

var serviceURL = "http://www.dictiondoctor.com/DDServices/";
//var serviceURL = "http://localhost/~daniel.neumann/DDServices/";

$('#screen3Page').live('pageshow', function(event) {
	$.mobile.allowCrossDomainPages = true;
	var id = getUrlVars()["id"];
//	alert("Called with id=" + id);
	console.log(serviceURL+'getdirection.php?id='+id);
	
	$.getJSON(serviceURL + 'getletter.php?callback=?','id='+id, function(data){
			var letterdata = data.item;
			var newstring = "Unit "+letterdata.letterID+" "+letterdata.letterIPA;
			$('#lettersound').text(newstring);
	
		});
	
	
	$.getJSON(serviceURL + 'getdirection.php?callback=?','id='+id, function(data){
		
			var screen3data = data.item;
			console.log(screen3data);

			$('#screenDirection').text(screen3data.directionString);

			var screenref = "screen" + screen3data.nextScreenType + ".html?id=" + screen3data.nextScreenID;
			console.log(screenref);
	
			$('#btnNext').attr('href', screenref);
		
		
	});
	
});


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







 
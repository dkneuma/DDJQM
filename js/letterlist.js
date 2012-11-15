
var letters;

var serviceURL = "http://www.dictiondoctor.com/DDServices/";
//var serviceURL = "http://localhost/~daniel.neumann/DDServices/";

$('#letterListPage').bind('pageinit', function(event) {
// alert("Page init");
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	getLetterList();
	});



function getLetterList() {
	$.getJSON(serviceURL+"getletters.php?callback=?", function(data) {
		$('#letterList li').remove();
		var letters = data.items;
		$.each(letters, function(index, letter) {
						//append to letterlist
			$('#letterList').append('<li><a href="screen3.html?id=' + letter.firstscreenID + '">' +
					'<h4>' + letter.lettersound + '</h4>' +
					'</a></li>');
		});
		$('#letterList').listview('refresh');
	});
}
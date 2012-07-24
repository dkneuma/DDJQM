var serviceURL = "http://dictiondoctor.com/DDServices/";

var letters;

$('#letterListPage').bind('pageinit', function(event) {
//	alert("Page init");
	$.mobile.allowCrossDomainPages = true;
	getLetterList();
	});



function getLetterList() {
	$.getJSON(serviceURL + 'getletters.php', function(data) {
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
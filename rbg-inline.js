function Xshow_hide_mediainfo() {
	$('#mediainfo_container').toggle();
	if($('#a_show_hide_mediainfo').text() == "[+] Show MediaInfo") {
		$('#a_show_hide_mediainfo').text('[-] Hide MediaInfo');
	} else {
		$('#a_show_hide_mediainfo').text('[+] Show MediaInfo');
	}
}


function XShowHide(id,id1) {
	$("#"+id+"").toggle();
	$("#"+id1+"").toggle();
}


function XpopulateNFO(url) {
	if($("#populateNFO").html() == "---") {
		$("#populateNFO").empty().html('<img src="//dyncdn.me/static/20/img/loading.gif" border="0" />');
		$.get(url, function(data) {
			$("#populateNFO").html('<pre>'+data+'</pre>');
		});
	} else {
		$("#populateNFO").html('---');
	}
}


$(function() {
	window.loaded_scrollspy_comments = 0;
	$('.scrollspycomments').on('scrollSpy:enter', function() {
		if(window.loaded_scrollspy_comments > 0) return;
		window.ncomments = new nComments('comments_id', 'bc3ff30c44249a7ffe4b816bbf6aaad29c19e128', '/nc.php', 130, '//dyncdn.me/static/20/images/smilies/smile1.gif');
		window.loaded_scrollspy_comments = 1;
	});
	$('.scrollspycomments').scrollSpy();
});

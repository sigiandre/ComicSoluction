jQuery(document).ready(function($){
	"use strict";
	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title:"Weekly Inspiration",
				free:true,
				mp3: "assets/audio/daleyspent.mp3"
			});
		},
		swfPath: "http://memory.themestudio.net/wp-content/themes/memory/assets/js",
		supplied: "mp3, wav, ogg, all",
		useStateClassSkin: true,
		smoothPlayBar: true,
		globalVolume: true,
		keyEnabled: true
	});
});
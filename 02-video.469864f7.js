!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var r=localStorage.getItem("videoplayer-current-time");r&&t.setCurrentTime(r)}();
//# sourceMappingURL=02-video.469864f7.js.map

const e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3)),function(){const e=localStorage.getItem("videoplayer-current-time");if(!e)return;t.setCurrentTime(Number(e)).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.a2199c17.js.map

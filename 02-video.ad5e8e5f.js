const e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const r=localStorage.getItem("videoplayer-current-time");r&&t.setCurrentTime(r);
//# sourceMappingURL=02-video.ad5e8e5f.js.map

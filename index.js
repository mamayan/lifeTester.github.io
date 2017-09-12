/**
 * Created by mayan on 2017/6/25.
 */

(function(d, w) {
  var docEl = d.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        return;
      }
      docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
    };

  if (!d.addEventListener) return;
  w.addEventListener(resizeEvt, recalc, false);
  d.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function playPause() {
  var music = document.getElementById('bgm');
  console.log(music);
  var music_btn = document.getElementById('page-bgm-on');
  if (music.paused){
    music.play();
    music_btn.src = 'images/btn_on.png';
  }
  else{
    music.pause();
    music_btn.src = 'images/btn_off.png';
  }
}

window.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation.angle);
});
// $("bgm-controls").click(function(){
//   var music = document.getElementById("bgm");
//   if(music.paused){
//     music.play();
//     $("page-bgm-on").attr("src","images/btn_on.png");
//   }else{
//     music.pause();
//     $("page-bgm-on").attr("src","images/btn_off.png");
//   }
// });
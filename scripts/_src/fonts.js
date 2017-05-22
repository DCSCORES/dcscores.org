var WebFontConfig = {
  "google": {
    "families": ['Open Sans:300,300i,400,400i,600,700']
  },

  "custom": {
    "families": ['DCSCORES', 'Icons'],
    "urls": ['/styles/estilo-secundario.css']
  }
};

(function() {

  function q() {
    var h = document.getElementsByTagName('head')[0],
      s = document.createElement('script');
    s.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    s.async = true;
    h.appendChild(s);
  };

  if (window.requestAnimationFrame) {
    var rAF = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
    rAF(q);
  } else {
    window.onload = q;
  }
})();;
console.log("running custom script from extention")
(function() {
    'use strict';
  
    let style = document.createElement('style');
    style.innerHTML = '*{ user-select: auto !important; }';
  
    document.body.appendChild(style);
  })();
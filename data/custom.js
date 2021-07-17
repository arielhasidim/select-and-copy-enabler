console.log("running custom script from extention");
(function() {
    'use strict';
  
    let style = document.createElement('style');
    style.innerHTML = '*{ user-select: auto !important; }';
  
    document.body.appendChild(style);
  })();

  var ctrlDown = false,
  ctrlKey = 17,
  cmdKey = 91,
  cKey = 67;

  document.onkeydown = function(e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
      if (ctrlDown && (e.code == 'KeyC')) {

        var selectedText = window.getSelection().toString();
        
        navigator.clipboard.writeText(selectedText).then(
          function () {
            console.log('success')
          },
          function () {
            console.log('failure')
          }
      );
      }
  }
  document.onkeyup = function(e) {
      if (e.code == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
  };
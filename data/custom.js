console.log("running custom script from extention");
(function() {
    'use strict';
  
    const style = document.createElement('style');
    style.innerHTML = '*{ user-select: auto !important; }';
  
    document.body.appendChild(style);
  })();

  let ctrlDown = false,
  ctrlKey = 17,
  cmdKey = 91,
  cKey = 67;

  document.onkeydown = function(e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
      if (ctrlDown && (e.code == 'KeyC')) {

        let selectedText = window.getSelection().toString();
        
        navigator.clipboard.writeText(selectedText).then(
          function () {
            console.log('copy success')
          },
          function () {
            console.log('copy failure. maybe update chrome?')
          }
      );
      }
  }
  document.onkeyup = function(e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
  };
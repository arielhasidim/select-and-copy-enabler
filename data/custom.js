console.log("running custom script from extention");
(function () {
  'use strict';

  const style = document.createElement('style');
  style.innerHTML = '*{ user-select: auto !important; }';

  document.body.appendChild(style);
})();

let ctrlDown = false,
  ctrlKey = 17,
  cmdKey = 91,
  cKey = 67;

let selectedText

// Overwrite what is being copied to the clipboard.
document.addEventListener('copy', function(e) {
  // e.clipboardData is initially empty, but we can set it to the
  // data that we want copied onto the clipboard.
  e.clipboardData.setData('text/plain', selectedText);

  // This is necessary to prevent the current document selection from
  // being written to the clipboard.
  e.preventDefault();
});

document.onkeydown = function (e) {
  selectedText = window.getSelection().toString();
  if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
  if (ctrlDown && (e.code == 'KeyC')) {

    navigator.clipboard.writeText(selectedText).then(
      function () {
        console.log('copy success: ' + selectedText)
      },
      function () {
        console.log('copy failure. maybe update chrome?')
      }
    );
  }
}
document.onkeyup = function (e) {
  if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
};
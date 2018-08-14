$(function() {

  // !!!
  // CANCEL ALL OF THIS TEXT ANIMATION FOR NOW
  // !!!
  //return false;
  // !!!

  const mainTitle = $(".join-now__main-title"); 
  let dataText = [ "Watch Videos Earn Bitcoins", "Complete Surveys, Earn Gift Cards", "Complete Simple Tasks, Earn PayPal"];
  
  let isTyping = true;

  function typeWriter(text, i, fnCallback) {

    if (i < text.length) {
      // text typing
      if (isTyping) {
          mainTitle.html('<span class="text-normal">' + text.substring(0, i+1) + '</span><span class="caret-animation" aria-hidden="true"></span>'); 
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);

      // text deliting
      } else {
          mainTitle.html('<span class="text-normal">' + text.substring(0, i+1) + '</span><span class="caret-animation" aria-hidden="true"></span>'); 
          setTimeout(function() {
            typeWriter(text, i - 1, fnCallback)
          }, 50);
      }
    }

    else if (i == text.length) {
      isTyping = false
      i = i - 1
      setTimeout(function() {
        typeWriter(text, i - 1, fnCallback)
      }, 2500);
    }
    
    // text typing and deleting finished, call callback if there is a callback function
    if (i == -1 && isTyping == false) {
      isTyping = true
      setTimeout(fnCallback, 500);
      i = text.length + 100 
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 1000);
    } else if (i < dataText[i].length) {
        // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);		
});
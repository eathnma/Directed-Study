

// puts listener whenever you press the keyboard
// use addEventListener, because event.keyCode is deprecated
function setMyKeyDownListener() {
    window.addEventListener(
      "keydown",
      function(event) {
          logKey(event.key)
        }
    )
}

//tracks keys
function logKey (key) {
    console.log("Key pressed is: "+ key);

    // grab content from html
    var keyPrintElement = document.getElementById("keyPrint");

    keyPrintElement.insertAdjacentHTML('beforeend',key);
    // // grab current content and appent key 
    // var keyAdded = htmlContent.concat(key);
    // // print to inner html
    // var htmlPrintKey = document.getElementsByClassName("keyPrint").innerHTML = keyAdded;
}
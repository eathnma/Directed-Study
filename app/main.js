console.log('this works!?');

document.getElementById("smallWindow").addEventListener("click", function(){
  var newWin = window.open('/views/max.html', 'example', 'width=350,height=562');
  console.log("button pressed");
});



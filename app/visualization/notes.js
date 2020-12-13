// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 10, height: 370 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var rectWidth = 5;
var rectHeight = 20;
var rect = two.makeRoundedRectangle(20 + rectWidth/2 , 0 + rectHeight /2, rectWidth, rectHeight);

// The object returned has many stylable properties:

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

var yPos = 0;
// make shapes move upwards
two.bind('update', function(frameCount) {
yPos--;
rect.translation.set(two.width / 2, 370 + yPos);
}).play();  // Finally, start the animation loop

two.update();
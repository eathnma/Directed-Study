// get reference from draw group 
var elem = document.getElementById('draw-group');
var two = new Two({ width: 285, height: 200 }).appendTo(elem);

var circle = two.makeCircle(-70, 0, 50);
var rect = two.makeRectangle(70, 0, 100, 100);
circle.fill = '#FF8000';
circle.stroke = 'orangered';
rect.fill = 'rgba(0, 200, 255, 0.75)';
rect.stroke = '#1C75BC';

// Groups can take an array of shapes and/or groups.
var group = two.makeGroup(circle, rect);

var yPos = 0;
// make shapes move upwards
two.bind('update', function(frameCount) {
yPos--;
group.translation.set(two.width / 2, two.height / 2 + yPos);
}).play();  // Finally, start the animation loop

two.update();
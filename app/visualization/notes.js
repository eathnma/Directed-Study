// test class to be exported
export{Note};

// each note has certain attributes such as x
class Note{
    constructor(color, speed){
        this.x = 0;
        this.y = 0;
        this.color = color;
        this.speed = speed;
       
        // define variable for future use
        this.two = undefined;
        
    }

    update(){
        this.setup();
        this.createShape();

        // updates animation
        this.two.update();
    }

    setup(){
        var elem = document.getElementById('draw-shapes');
        var params = { width: 50, height: 370 };
        this.two = new Two(params).appendTo(elem);
    }

    createShape(){
        // loop through every instance of draw-shapes
        // elems = [...elems].map((elem)=>{

        // two has methods to create shapes.
        var rectWidth = 5;
        var rectHeight = 20;
        var rect = this.two.makeRoundedRectangle(20 + rectWidth/2 , 0 + rectHeight /2, rectWidth, rectHeight);

        // The object returned has many stylable properties:
        rect.fill = 'rgb(0, 200, 255)';
        rect.opacity = 0.75;
        rect.noStroke();

        var yPos = 0;

        let that = this;
        // make shapes move upwards
        this.two.bind('update', function(frameCount) {
            yPos--;
            rect.translation.set(that.two.width / 2, 370 + yPos);
            }).play();  // Finally, start the animation loop
        
        // elems = [...elems].map((elem)=>{
        // });
    }

}
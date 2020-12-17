// test class to be exported
export{Note};

// each note has certain attributes such as x
class Note{
    constructor(color, id){
        this.color = color;
        this.id = id;
        // define variable for future use
        this.two = undefined;
    }

    update(){

        if(typeof this.two === "undefined"){
            this.setup();
        }   
        this.createShape();

        // updates animation
        this.two.update();
    }

    setup(){
        var elem = document.getElementById(this.id);
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
        rect.fill = this.color;
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
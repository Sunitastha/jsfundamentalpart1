//volume of cylinder
function Cylinder(radius,height){
  
        this.radius=radius;
        this.height=height;
        this.volume=function(){
            return (Math.PI*radius*radius*height);
        }
}  

var calculatevolume = new Cylinder(5,10);
 console.log("volume of cylinder is="+calculatevolume.volume().toFixed(4)+"cm^3");
 

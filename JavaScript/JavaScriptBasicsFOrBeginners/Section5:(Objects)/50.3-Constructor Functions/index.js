// Camel Notation: oneTwoThreeFour' (When ever you are creating a Factory function use camel notation)
// Pascal Notation: OneTwoThreeFour (When ever using the constructor function use the pascal Notation it is a convenstion)




// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    }

    return this;
}


Circle(5).draw();
Circle(5).radius;

const circle = new Circle(5);
circle.draw();
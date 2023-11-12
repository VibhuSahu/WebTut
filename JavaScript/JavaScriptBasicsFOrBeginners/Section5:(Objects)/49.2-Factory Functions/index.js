// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {    // it is same as -> draw: function()
            console.log("Circle");
        }
    };
}



const Circle1 = createCircle(5);
console.log(Circle1);

const Circle2 = createCircle(2);
console.log(Circle2);
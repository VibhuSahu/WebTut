// Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    isVisible: true,

    draw: function() { 
        /**
         * In javascript function inside the object is called as method not function.
         */
        console.log('draw');
    }
};

circle.draw();

console.log(circle.isVisible);
/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculerAge(1965);

function calculerAge(annee) {
    console.log(2016 - annee);
}

// retirement(1956);
var retirement = function(annee) {
    console.log(65 - (2016 - annee));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculerAge(1985);

function calculerAge(annee) {
    console.log(2016 - annee);
    console.log(this);
}

var john = {
    name: 'John',
    anneeDeNaissance: 1990,
    calculerAge: function() {
        console.log(this);
        console.log(2016 - this.anneeDeNaissance);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculerAge();

var mike = {
    name: 'Mike',
    anneeDeNaissance: 1984
};


mike.calculerAge = john.calculerAge;
mike.calculerAge();
*/

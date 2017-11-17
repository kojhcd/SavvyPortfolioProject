/* eslint-disable complexity, no-console  */
var fizzBuzzResult = "";

var fizzBuzz = function fizzBuzz( num ){
    if( num % 15 === 0 ){
        fizzBuzzResult += ", fizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += ", " + num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
};
var fizzBuzzLightyear = function fizzBuzzLightyear( limit ){
    for( let i = 1; i < limit; i++ ){
        fizzBuzz( i );
    }
};

fizzBuzzLightyear( 50 );

document
    .querySelector( "#fizzBuzz" )
    .textContent = fizzBuzzResult;

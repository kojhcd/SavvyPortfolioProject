/* Globals $ */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3>Hello, " + value + "</h3>" );
    }
);

$( ".content ul" ).on( "mouseenter" , ( event ) => {
    $( event.target ).css( "background-color", "yellow" );
} );

$( ".content ul" ).on( "mouseleave" , ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );


$( "h1" ).on( "dblclick", ( event ) => event.target.textContent );


// var hello = "hello";
// /* eslint-disable no-console*/
// var originalName = prompt( "what's your name" );
//
// var checkUserName = function checkUserName( userName ){
//     if( !userName || userName === " " ){
//         userName = prompt( "what's your name, for real this time" );
//         checkUserName( userName );
//     }
//     else{
//         originalName  = userName;
//     }
// };
//
// checkUserName( originalName );
//
// // document.querySelector( "h1" ).textContent = "hello, " + originalName;
//
// document.querySelector( "#subheader" )
//     .innerHTML = "<h1> Hellllllooooo  " + originalName + "</h1>";

// check to see if it works and the console will show a Jquery return

console.log( $ );

$( "h1" ).on( "dblclick", ( event ) => event.target.textContent = "I've been clicked" );

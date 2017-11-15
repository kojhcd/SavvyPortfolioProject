var hello = "hello";
/* eslint-disable no-console*/
var originalName = prompt( "what's your name" );

var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "what's your name, for real this time" );
        checkUserName( userName );
    }
    else{
        originalName  = userName;
    }
};

checkUserName( originalName );

// document.querySelector( "h1" ).textContent = "hello, " + originalName;

document.querySelector( "#subheader" )
    .innerHTML = "<h1> Hellllllooooo  " + originalName + "</h1>";

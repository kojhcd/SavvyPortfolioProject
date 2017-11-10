var hello = "hello";
/* eslint-disable no-console*/
var userName = prompt( "what's your name" );
var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "stop foolin and tell me" );
        checkUserName();
    }
    if( !userName || userName === " " ){
        userName = prompt( "stop foolin around tell me" );
        checkUserName();
    }
};

checkUserName();
alert( hello + " " + userName );

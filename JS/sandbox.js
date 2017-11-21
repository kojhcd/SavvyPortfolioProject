/* global $ */
var $output = ( "#output" );
var $subtitle = $( "<h2> I'm a subtitle </h2>" );

$output
    .html( "<h1>Hello, World! </h1>" )
    .css( {
        "color": "blue" ,
        "font-size": "200%",
        "margin-left": "30%"
    } )
    .append( $subtitle )
    .fadeOut( 1000 )
    .fadeIn()
    .animate( {
        "margin-top": "200%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "purple" );
        }
    } );

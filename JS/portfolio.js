$( "#bio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( '<img src="https://drive.google.com/uc?export=view&id=198hKZyr9W1sZDylE2oxs67EgdmSl1uo6"/>' + " <p> Over the last ten years I have travelled such a journey a dozen times or more, each with the determination and perseverance to accomplish my goal. Assisted by mentors, supportive friends, family and coworkers, I made it to the top of the mountain.<br>" + "<br> <sp><img src='https://drive.google.com/uc?export=view&id=1UXGrnHl7Sd43V9fOnJl4rU45YUur-IMc'<br> " + "<br><sp> And today I stand before you with the same objective. To overcome a challenge and triumph as a junior web developer in this exciting, challenging, and rapidly advancing field. </p>"
    );
}
);

$( "#resume" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( '<p id="glow">  Professional Resume</p><br>' + '<a href="https://drive.google.com/open?id=0B49ZdIwG-YMOdGhXQnBBa20wUFU"><i class="fa fa-file-pdf-o fa-5x" aria-hidden="true"></i></a>' + "<ul><li> Strong command of browser development tools: HTML/CSS/Javascript; using best coding practices</li><br><li> Experienced building sites using responsive adaptive design in compliance with usability standards</li><br><li>Strong ability to work independently as well as part of a team </li></ul>"
    );
}
);


$( "#portfolio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( "<p id='glow'> My personal sites </p> <br>" + '<img src="https://drive.google.com/uc?export=view&id=19N2AXiMXOl3u3hly8iWgw7ee4237ep1D"/>' + '<img src="https://drive.google.com/uc?export=view&id=1qyHsoFzZGGWti-F9IUz7iT9OmB2tAj2t"/>' + '<img src="https://drive.google.com/uc?export=view&id=0B49ZdIwG-YMOYTYzSDlYUDYzcXM"/>'
    );
}
);

$( "#contact" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( " <p id='glow'> Please Complete The Form = D </p>"
    );
}
);

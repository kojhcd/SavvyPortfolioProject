$( "#bio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( '<img src="https://drive.google.com/uc?export=view&id=198hKZyr9W1sZDylE2oxs67EgdmSl1uo6"/>' + " <p> Over the last ten years I have travelled such a journey a dozen times or more, each with the determination and perseverance to accomplish my goal. Assisted by mentors, supportive friends, family and coworkers and recovering from an accident, I made it to the top of the mountain. And today I stand before you with the same objective. To overcome a challenge and triumph as a junior web developer in this quickly advancing field. </p>"
    );
}
);

$( "#resume" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( "<p> Kyle Jennings Profession Web Developer Resume</p>"
    );
}
);


$( "#portfolio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( "<p> My personal sites </p>" + '<img src="https://drive.google.com/uc?export=view&id=0B49ZdIwG-YMOMXNJU2U4cFZNRWM"/>' + '<img src="https://drive.google.com/uc?export=view&id=0B49ZdIwG-YMORU1ZSXFOcXVZSnM"/>' + '<img src="https://drive.google.com/uc?export=view&id=0B49ZdIwG-YMOYTYzSDlYUDYzcXM"/>'
    );
}
);

$( "#contact" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( " <p> Please Complete The Form = D </p>"
    );
}
);

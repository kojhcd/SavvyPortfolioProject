$( "#bio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( '<img src="https://drive.google.com/uc?export=view&id=198hKZyr9W1sZDylE2oxs67EgdmSl1uo6"/>' + " <p> A Journey of a thousand miles...</p><br>" + "<br><p> Over the last decade, I have travelled such a journey a dozen times, with determination and perseverance to accomplish my goal. Assisted by mentors, family and coworkers, I made it to the top!<br>" + "<br> <sp><img src='https://drive.google.com/uc?export=view&id=1UXGrnHl7Sd43V9fOnJl4rU45YUur-IMc'<br> " + "<br><sp> And today I stand before you with the same objective. To overcome a challenge and triumph as a junior web developer in this exciting, challenging, and rapidly advancing field. </p>"
    );
}
);

$( "#resume" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( '<p id="glow">  Professional Resume</p><br>' + '<a href="https://drive.google.com/open?id=0B49ZdIwG-YMOdGhXQnBBa20wUFU"><i class="fa fa-file-pdf-o fa-5x" aria-hidden="true"></i></a>' + "<ul><li><p> Strong command of browser development tools: HTML/CSS/Javascript; using best coding practices</p></li><br><li><p> Experienced building sites using responsive adaptive design in compliance with usability standards</p></li><br><li><p>Strong ability to work independently as well as part of a team</li><br> <li>Excellent interpersonal and public relations skills </p> </li></ul>"
    );
}
);


$( "#portfolio" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( "<p id='glow'> My personal sites </p> <br>" + '<img src="https://drive.google.com/uc?export=view&id=19N2AXiMXOl3u3hly8iWgw7ee4237ep1D"/>' + '<img src="https://drive.google.com/uc?export=view&id=1o7dfKz6COfjtjYkNUGlpM0XJoHvNoXit">' + '<img src="https://drive.google.com/uc?export=view&id=1qyHsoFzZGGWti-F9IUz7iT9OmB2tAj2t"/>'
    );
}
);

$( "#contact" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( " <p id='glow'> Contact Me ! = D </p>" + '<form action="https://formspree.io/kyleojennings@gmail.com" method="POST"><br><h2> You would like me to....</h2><label><input type="radio" name="subject" value="professional" checked><span> Build you a website! <br></span><input type="radio" name="subject" value="personal"><span>create your photography portfolio!</span><br></label><input type="text" name="firstname" placeholder="First Name" size="100" autofocus><input type="text" name="lastname" placeholder="Last Name" size="100"><br><input type="email" name="userEmail" placeholder="your.email@example.com"><br><input type="checkbox" name="optin" value="trusting" checked>Youd like me to give you a personal call<br><input type="checkbox" name="optout" value="skeptical" disabled>Your interested in professional services<br><label for="marketing"><br>How did you hear about me?</label><br><select name="marketing"><optgroup label="Online"><option value="social">Social Media (FB, Twitter, LinkedIn)</option><option value="github">Online Portfolio (GitHub)</option><option value="search">Search Engine</option><option value="email">Email</option></optgroup><optgroup label="In-Person"><option value="networking">I helped you change a tire at the auto parts store</option><option value="referral">You laughed at my joke in the coffee shop</option><option value="random">We met somewhere else</option></optgroup><option value="other">Other</option></select><br><textarea name="user_message" rows="8" cols="40"></textarea><br><input type="submit"></form>'
    );
}
);


$( "#firstcontact" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( " <p id='glow'> Contact Me ! = D </p>" + '<form action="https://formspree.io/kyleojennings@gmail.com" method="POST"><br><h2> You would like me to....</h2><label><input type="radio" name="subject" value="professional" checked><span> Build you a website! <br></span><input type="radio" name="subject" value="personal"><span>create your photography portfolio!</span><br></label><input type="text" name="firstname" placeholder="First Name" size="100" autofocus><input type="text" name="lastname" placeholder="Last Name" size="100"><br><input type="email" name="userEmail" placeholder="your.email@example.com"><br><input type="checkbox" name="optin" value="trusting" checked>Youd like me to give you a personal call<br><input type="checkbox" name="optout" value="skeptical" disabled>Your interested in professional services<br><label for="marketing"><br>How did you hear about me?</label><br><select name="marketing"><optgroup label="Online"><option value="social">Social Media (FB, Twitter, LinkedIn)</option><option value="github">Online Portfolio (GitHub)</option><option value="search">Search Engine</option><option value="email">Email</option></optgroup><optgroup label="In-Person"><option value="networking">I helped you change a tire at the auto parts store</option><option value="referral">You laughed at my joke in the coffee shop</option><option value="random">We met somewhere else</option></optgroup><option value="other">Other</option></select><br><textarea name="user_message" rows="8" cols="40"></textarea><br><input type="submit"></form>'
    );
}
);

/* this is the icon on the top that you see when you first get in there on the page */
$( "#firstwebdesign" ).on( "click", ( event ) => {
    event.preventDefault();

    $( "#content" ).html( "<p id='glow'> My personal sites </p> <br>" + '<img src="https://drive.google.com/uc?export=view&id=19N2AXiMXOl3u3hly8iWgw7ee4237ep1D"/>' + '<img src="https://drive.google.com/uc?export=view&id=1o7dfKz6COfjtjYkNUGlpM0XJoHvNoXit">' + '<img src="https://drive.google.com/uc?export=view&id=1qyHsoFzZGGWti-F9IUz7iT9OmB2tAj2t"/>'
    );
}
);

/* eslint-disable no-use-before-define */
var story = {
    "start": {
        "text": "You find yourself suddenly teleported to an interdimensional hub filled with arthropod-like creatures that seem to ignore you. Would you like to travel further into the Hive or make a break for whatever appears to be 'outside'?",
        "choices": [ "hive", "outside" ]
    },
    "hive": {
        "text": "Knowing nothing about arthopodian architecture, you meander aimlessly through corridors innumerable and unspeakably vast. As you near exhaustion, you finally see it: a font of what appears to be water! Would you like to take a drink or keep walking?",
        "choices": [ "walk", "drink", "outside" ]
    },
    "outside": {
        "text": "As you step outside the Hive, a mysterious force field draws back, with the effect of ejecting you violently into space. As you asphyxiate, you recall fondly that scene from Guardians of the Galaxy 2 (no spoilers)",
    },
    "drink": {
        "text": "You take a drink of the mysterious alien liquid and promptly die because it's pretty much poison, duh.",
    },
    "walk": {
        "text": "You walk farther into the hive, but then get eaten, lol."
    }
};

function validateChoice( choice, choices ){
    var isValidChoice = false;

    choices.forEach( () => {
        if( choice === validChoice ){
            isValidChoice = true;
        }
    } );

    return isValidChoice;
}

/*
    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}
*/

function myFunction(){
    add( x += 5 );
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" );

        // 1  document.getElementById("h1").innerHTML = ;
        //  .textContent = chapter.text;
    }
}

runStory( "start" );


/* MYSTORY START var story = {
    "start": {
        "text": "From the summit of the mountain I could see the storm moving in.  Descend or bivy?",
        "choices": [ "descend", "bivy" ]
    },
    "descend": {
        "text": "As the rain begins to pour your a rappelling down the mountain when you see lighting. Continue, bivy or radio?",
        "choices": [ "bivy", "radio", "continue" ]
    },
    "bivy": {
        "text": "As your setting up your bivy you begin to get pelted by rain,lightning strikes you. Your dead",
    },
    "drink": {
        "text": "that's what your hip flask is for. But, the metal attracts lightning",
    },
    "radio": {
        "text": "Your radio doesn't work in the weather, and during the time wasted, do you radio again, continue, or bivy?",
        "choices": [ "radio", "bivy", "continue" ]
    },
    "continue": {
        "text": "You made it to the bottom, great job!",
    },
};


function validateChoice( choice, choices ){
    var isValidChoice = false;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}

runStory( "start" );
-------------------------------------------------
var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var isValidchoice = false;
    var choice;

    if( choices ){
        choice = prompt( chapter.text );

        // valid choice here!
        for( var i = 0; i < choices.length; i++ ){
            if( choice === choices[i] ){
                isValidchoice = true;
            }
        }

        if( isValidchoice ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};

runStory( "start" );

*/

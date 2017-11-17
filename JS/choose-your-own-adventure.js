var story = {
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

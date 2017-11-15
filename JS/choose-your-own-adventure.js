var story = {
    "start": "From the summit of the mountain I could see the storm moving in.  Descend or bivy?",
    "descend": "As the rain begins to pour your a rappelling down the mountain when you see lighting. bivy or radio?",
    "bivy": "As your setting up your bivy you begin to get pelted by rain,lightning strikes you. Your dead",
    "drink": "that's what your hip flask is for. But, the metal attracts lightning",
    "radio": "Your radio doesn't work in the weather, and during the time wasted, do you radio again or bivy?"

};

var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "descend" ){
        choice =  prompt( story[choice] );
    }
    if( choice === "drink" ){
        document
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    if( choice === "radio" ){
        choice =  prompt( story[choice] );
    }


    else if( choice === "bivy" ){
        document
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    else{
        runStory();
    }
};

runStory();

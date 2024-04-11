var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

function golfScore(par, strokes){
    if(strokes == 1){
        console.log("Golf Score is : "+names[0]);
    }else if(strokes <= par-2){
        console.log("Golf Score is : "+names[1]);
    }else if(strokes == par -1){
        console.log("Golf Score is : "+names[2]);
    }else if(strokes == par){
        console.log("Golf Score is : "+names[3]);
    }else if(strokes == par  + 1){
        console.log("Golf Score is : "+names[4]);
    }else if(strokes <= par+2){
        console.log("Golf Score is : "+names[5]);
    }else if(strokes <= par+3){
        console.log("Golf Score is : "+names[6]);
    }
}

golfScore(5,2);
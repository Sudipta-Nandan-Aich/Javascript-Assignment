// https://github.com/Sudipta-Nandan-Aich/Javascript-Assignment

// Problem: 1- kilometerToMeter

function kilometerToMeter(input){
    if(input < 0){
        return "Distance can't be negative";
    }
    else if(typeof input =='string'){
        return "Value of Kilometer should be numeric";
    }
    else{
        var result = input * 1000;
        return result;
    }
}


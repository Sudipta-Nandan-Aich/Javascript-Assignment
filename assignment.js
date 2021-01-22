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

// Problem: 2- budgetCalculator

function budgetCalculator(clock, mobile , laptop){
    if (clock < 0 || mobile < 0 || laptop < 0 ){
        return "Unit value can't be negative";
    }
    else if (Number.isInteger(clock) == true && Number.isInteger(mobile) == true && Number.isInteger(laptop) == true){
        var clockPrice = clock*50;
        var mobilePrice = mobile*100;
        var laptopPrice = laptop*500;
        var totalBudget = clockPrice + mobilePrice + laptopPrice;
        return totalBudget;
    }
    else{
        return "Unit value should be integer";
    }

}



// Problem: 3- hotelCost
 
function hotelCost(day){
    var totalcost = 0;
    if (day<0){
        return "Day can't be negative";
    }
    else if (Number.isInteger(day) == true){
        if(day<=10){
            totalcost = day*100;
        }
        else if (day<=20){
            var firstPart = 10*100;
            var remaining = day - 10;
            var secondPart = remaining*80;
            totalcost = firstPart+secondPart;

        }
        else{
            var firstPart = 10*100;
            var secondPart = 10*80;
            var remaining = day - 20;
            var thirdPart = remaining*50;
            totalcost = firstPart+secondPart+thirdPart;
        }
        return totalcost;

    }
    else{
        return "Day should be integer";
    }
}



// Problem: 4- megaFriend

function megaFriend(names){
    if(Array.isArray(names)==true){
        var nameLength = 0;
        var biggestNameLength;
        for(var i = 0; i < names.length; i++){
            var elemantLength = names[i].length;
            if(elemantLength>nameLength){
                nameLength=elemantLength;
                biggestNameLength= names[i];
            }
        }
        return biggestNameLength;
    }
    else{
        return "Input letter as name";
    }
}

function ternaryCheckCity(){

    if (city=NYC){return 'This is not a valid distance';}
    else {return 'This is not a validd distance';}
    
}
console.log(ternaryCheckCity(NYC));
console.log(ternaryCheckCity(Miami));

function switchOnCharmFromTip(){
    
     if (tip >= 20){ 
        return 'Thank you so much';
     }
     else if (tip <= 19){
        return 'Thank you';
     }
     else {
        return 'Your welcome'
     }
}
 console.log(switchOnCharmFromTip(25));
 console.log(switchOnCharmFromTip(13));
 console.log(switchOnCharmFromTip(0));
 
 function scubarGreetingForFeet(feet){
     if (feet <= 400){
        return 'This one is on me!';
     }
     else if (feet >400 && feet <2000){
        return  'That will be 20 bucks';
     }
     else if (feet>2000 && feet <=2500){
        return 'I will gladly take your thirty bucks';
     }
     else if (feet > 2500){
        return 'I cannot travel that far ';
     }
     else{
        'This not a valid distance';
     }
 }

 console.log(scubarGreetingForFeet(300));
 console.log(scubarGreetingForFeet(900));
 console.log(scubarGreetingForFeet(2300));
 console.log(scubarGreetingForFeet(2600));
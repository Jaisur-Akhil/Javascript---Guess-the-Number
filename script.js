'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🐱‍🏍Correct Numbers!!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//document.querySelector('.guess').nodeValue=23 ;
document.querySelector('.guess').value=23 ; 
console.log(document.querySelector('.guess').value);

*/
let sNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let hs = 0;

document.querySelector('.again').addEventListener(
    'click',function(){
        score = 20;
        sNumber = Math.trunc(Math.random()*20)+1;
        // document.querySelector('.message').textContent = 'START GUESSING';
        displayMessage('START GUESSING');
        document.querySelector('.score').textContent = score ; 
        document.querySelector('.number').textContent = sNumber ; 
        document.querySelector('.guess').value = "";
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor= "#000000";
        
    }
);

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector('.number').textContent = sNumber;
document.querySelector('.check').addEventListener(
    'click', function(){
        const guess =Number(document.querySelector('.guess').value);
        console.log(guess);
       // console.log(typeof guess);
        // document.querySelector('.message').textContent ="🙌🙌🙌Correct Number!";
        
        //when no input
        if(!guess){
            displayMessage( "⛔No Number!");
        }
        else if (guess === sNumber){
            displayMessage("🙌🙌🙌Correct Number!");
           // document.querySelector('.message').textContent ="🙌🙌🙌Correct Number!";
            document.querySelector('body').style.backgroundColor= "#60b347";
            document.querySelector('.number').style.width ='30rem';

            if(score > hs){
                hs = score;
                document.querySelector('.highscore').textContent=hs;
            }

        }
        //when not equal 
        else if (guess !==sNumber){
            if(score>1){
                displayMessage(guess>sNumber? "TO HIGHHH":'TOOO LOWWWW');
              //  document.querySelector('.message').textContent = guess>sNumber? "TO HIGHHH":'TOOO LOWWWW';
                score--;
                document.querySelector(".score").textContent=score;                 
            }    
            else{
                displayMessage("🤷‍♀️You lost the Game");
              //  document.querySelector('.message').textContent="🤷‍♀️You lost the Game";
                document.querySelector('.score').textContent=0;
            }     

        }     
   
      
}) ;
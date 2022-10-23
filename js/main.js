// challenge 1: Get Age in Days
getAgeInDays=()=>{
    
    var birthYear=prompt('what year were you born?');
    var ageInDays=(2022-birthYear)*365;
    
    var h1=document.createElement('h1');
    var textAnser=document.createTextNode('you are ' + ageInDays + '  days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnser);
    
    document.getElementById('flex-box-result').appendChild(h1)
    }
    
    reset=()=>{
    
        document.getElementById('ageInDays').remove();
    }
    
    
    // challenge 2: Ganarate cat
    
    generateCat=()=>{
        var image=document.createElement('img');
        var div=document.getElementById('img-cat-gen');
        image.src="https://cdn2.thecatapi.com/images/8vj.gif";
        div.appendChild(image);
    }
    
    // Challenge 3: Rock ,Paper ,Scissors
    
    rpsGame=(yourChoice)=>{
        console.log(yourChoice);
        var humenChoice,botChoice;
        humenChoice=yourChoice.id;
    
        botChoice=numberToChoice(randTorpsNumber());
       // console.log('computerChoice ',botChoice);
    
        results=decideWinner(humenChoice,botChoice);
        console.log(results);
    
      // console.log( fainullMessage(results));
       rpsFrontEnd(humenChoice,botChoice,fainullMessage(results));
    }
    
    numberToChoice=(number)=>{
        return ['rock','paper','scissors'][number];
    
    }
    
    randTorpsNumber=()=>{  
        return Math.floor(Math.random() * 3);
    }
    
    decideWinner=( yourChoice,computerChoice)=>{
     console.log( 'yourChoice  :'+yourChoice + " ,   computerChoice :",computerChoice)
        var rpsDatabase={
            'rock':{ 'scissors' :1,'rock' :0.5, 'paper' :0},
            'paper':{ 'rock' :1, 'paper' :0.5, 'scissors' :0 },
            'scissors':{ 'paper' :1, 'scissors' :0.5, 'rock' :0}
        }
        
        computerScore=rpsDatabase[computerChoice][yourChoice]; 
        yourScore=rpsDatabase[yourChoice][computerChoice];
    
        return [yourScore,computerScore];
    }
    
    
    fainullMessage=([yourScore,computerScore])=>{
        if (yourScore==0) {
            return {'message': 'you lost', 'color': 'red'}
            
        } else if (yourScore==0.5) {
            return {'message': 'you tied', 'color': 'yellow'}
        } else {
            return {'message': 'you won', 'color': 'green'}
            
        }
    }
    
    
    rpsFrontEnd=(humanImageChoice,botImageChoice,message)=>{
        rpsImageDatabase={
            'rock':document.getElementById('rock').src,
            'paper':document.getElementById('paper').src,
            'scissors':document.getElementById('scissors').src
        }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
    
        var humanDiv=document.createElement('div');
        var botDiv=document.createElement('div');
        var messageDiv=document.createElement('div');
      
    
        humanDiv.innerHTML=`<img id="rock" src="${rpsImageDatabase[humanImageChoice]}" width="150" height="150" alt="" style=" box-shadow: 0px 10px 50px  rgba(28, 25, 199, 1);">`;
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
       
        messageDiv.innerHTML=`<h1 style="color:${message['color']};padding:30px; font-size:60px ">${message['message']}</h1>`;
    
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    
        botDiv.innerHTML=`<img id="rock" src="${rpsImageDatabase[botImageChoice]}" width="150" height="150" alt="" style="  box-shadow: 0px 10px 50px  rgba(241, 8, 8, 1);">`;
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
    }
    
    
    //CHALLENG 4:Challenge 4:Change the color of all buttons
    var all_buttons=document.getElementsByTagName('button');
    console.log(all_buttons);
    
    var copyAllButtons=[];
    for (let index = 0; index < all_buttons.length; index++) {
        copyAllButtons.push(all_buttons[index].classList[1]);
    }
    
    console.log(copyAllButtons);
    buttonColorChange=(yourColor)=>{
        switch (yourColor.value) {
            case 'red':
                buttonsRed();
                break;
            case 'green':
                buttonsGreen();
    
                break;
            case 'reset':
                buttonsReset();
                break;
            case 'random':
                buttonsRandom();
             break;
        }
    }
    
    buttonsRed=()=>{
        for (let index = 0; index < all_buttons.length; index++) {
            all_buttons[index].classList.remove(all_buttons[index].classList[1]);
            all_buttons[index].classList.add('btn-danger');
            
        }
        
    }
    
    buttonsGreen=()=>{
        for (let index = 0; index < all_buttons.length; index++) {
            all_buttons[index].classList.remove(all_buttons[index].classList[1]);
            all_buttons[index].classList.add('btn-success');
            
        }
        
    }
    
    buttonsReset=()=>{
        for (let index = 0; index < all_buttons.length; index++) {
            all_buttons[index].classList.remove(all_buttons[index].classList[1]);
            all_buttons[index].classList.add(copyAllButtons[index]);
        }
    }
    
    buttonsRandom=()=>{
    
        choice=['btn-danger', 'btn-success', 'btn-primary', 'btn-warning']
        for (let index = 0; index < all_buttons.length; index++) {
            all_buttons[index].classList.remove(all_buttons[index].classList[1]);
           // var randomVal=Math.floor(Math.random() * 4);
           
            all_buttons[index].classList.add(choice[Math.floor(Math.random() * 4)]);
        }
    }
    
    
    // Challenge 5 :The BlackJack Game
    
    
    document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
    
    
    function blackjackHit(){
        alert('i am hit button')
    }
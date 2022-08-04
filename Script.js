
console.log("Welcome to Tic Tac Toe");

// Giving Music to varible//

let audio_Music = new Audio("./External/music.mp3");
let audio_ting = new Audio("./External/ting.mp3");
let audio_gameover = new Audio("./External/gameover.mp3");

let Turn = "X";
let isGameOver=false;

// Change Turn Function //

const ChangeTurn = () => {

    return Turn === "X" ? "0" : "X";
    // condition ? true : false
};

// Function To Check for a Win 


//   0 | 1 | 2  
// -----------
//   3 | 4 | 5  
// -----------
//   6 | 7 | 8 
// -----------

const checkWin = () => {

    let boxtext=document.getElementsByClassName('boxtext');
    // total 9 Box text : [0,...,8]

    let Wins=[
        
    //E[0],E[1],E[2]; 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];


    // Wins.forEach(() => {});

    Wins.forEach((E) => {

        // Comparing all textbox with index Number
      
        if ((boxtext[E[0]].innerText===boxtext[E[1]].innerText) && (boxtext[E[1]].innerText===boxtext[E[2]].innerText) && (boxtext[E[0]].innerText!='')) 
         {
            document.getElementById("Info").innerText = `${boxtext[E[1]].innerText} is Won `;

             isGameOver=true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='120px';

         }


    });

};




// ---------------- Main Game Logic ---------------------- //

// audio_Music.play();
// There is some error in playing a song.

// Step 1 : Take a Refernce of all Boxes //

let Boxes = document.getElementsByClassName("box");

// Step 2 : Select Box Individually //

// Array.from(Boxes).forEach(()=>{}); // ==> first we have convert it to array 


Array.from(Boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    // select Boxtext class of particulat element //


    //   --- Adding an Event Listener  to box (Element) --- //

    element.addEventListener('click', () => {

        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;

            Turn = ChangeTurn();

            audio_ting.play();

            checkWin();


             if (isGameOver!=true) // work till game is Not Over
            {               
                document.getElementById("Info").innerText = `Turn for '${Turn}' `;
            }

        }



    });

});


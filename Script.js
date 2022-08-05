
console.log("Welcome to Tic Tac Toe");

// Giving Music to varible//

let audio_Music = new Audio("./External/music.mp3");
let audio_ting = new Audio("./External/ting.mp3");
let audio_gameover = new Audio("./External/gameover.mp3");

let Player = document.getElementById('playername');
let Turn = document.getElementById('playername').innerText;
let isGameOver = false;

let Reset = document.getElementById('reset');

let win = false;


// console.log(document.getElementById('playername').innerText);
// console.log(document.getElementById('playername').innerHTML);
// console.log(Turn);


// Change Turn Function //

const ChangeTurn = () => {
    return Turn === "X" ? "O" : "X";
    // condition ? true : false

};



// Function To Check for a Win 


//   0 | 1 | 2  
// -----------
//   3 | 4 | 5  
// -----------
//   6 | 7 | 8 
// -----------

const checkWin = (t_Turn) => {

    let boxtext = document.getElementsByClassName('boxtext');

    // total 9 Box text : [0,...,8]

    
    
    let Wins = [
        
        //E[0],E[1],E[2]; 
        [0, 1, 2, 5, 5, 0, 1.2],
        [3, 4, 5, 5, 15, 0, 1.2],
        [6, 7, 8, 5, 25, 0, 1.2],
        [0, 3, 6, -5, 15, 90, 1.2],
        [1, 4, 7, 5, 15, 90, 1.2],
        [2, 5, 8, 15, 15, 90, 1.2],
        [0, 4, 8, 5, 15, 45, 1.2],
        [2, 4, 6, 5, 15, 135, 1.2]
    ];
    
    
    // Wins.forEach(() => {});
    
    Wins.forEach((E) => {
        
        // Comparing all textbox with index Number

        if ((boxtext[E[0]].innerText === boxtext[E[1]].innerText) && (boxtext[E[1]].innerText === boxtext[E[2]].innerText) && (boxtext[E[0]].innerText != '')) {
            if (t_Turn == "X") {
                document.getElementById("Info").style.color = "red";
                t_Turn = "O";
            }
            
            else {
                document.getElementById("Info").style.color = "blue";
                t_Turn = "X";

            }

            document.getElementById("Info").innerText = `${t_Turn} `;

            Player.style.color = "black";
            Player.innerText = "is Won";
            
            win = true;
            
            isGameOver = true;
            
            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';
            
            
            // Drawing a Line //
            
            document.querySelector('.Line').style.width = "20vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;
            
            audio_gameover.play();

            // document.getElementsByClassName("box").style.pointerEvents = 'none';
           
            
            setTimeout(() => {
                window.location.reload();
            }, 3000);


        }


    });

};




// ---------------- Main Game Logic ---------------------- //

//   audio_Music.play();
// There is some error in playing a song.

// Step 1 : Take a Refernce of all Boxes //

let Boxes = document.getElementsByClassName("box");

// Step 2 : Select Box Individually //

// Array.from(Boxes).forEach(()=>{}); // ==> first we have convert it to array 




    Array.from(Boxes).forEach(element => {

        // if (win===true) {
            
        //     Boxes.style.pointerEvents = 'none';
        // }

        let boxtext = element.querySelector('.boxtext');
        // select Boxtext class of particulat element (Select Only One at a time )//


        //   --- Adding an Event Listener  to box (Element) --- //


        element.addEventListener('click', () => {

            isGameOver = false;
            win = false;

            if (boxtext.innerText === '') {
                boxtext.innerText = Turn;



                Turn = ChangeTurn();

                // Change colour of turn //

                if (Turn == "X") {
                    Player.style.color = "blue";
                    boxtext.style.color = "red";
                }

                if (Turn == "O") {            // It is a Zero                          
                    Player.style.color = "red";
                    boxtext.style.color = "blue";

                }

                audio_ting.play();

                checkWin(Turn);


                if (isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${Turn}`;
                }

            }





        });

    });


// Add onclickListener to reset button

Reset.addEventListener('click', () => {

    let boxtext = document.querySelectorAll('.boxtext');

    Array.from(boxtext).forEach((element) => {

        element.innerText = "";

    });


    Player.innerText = "X";

    if (win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.getElementById("Info").style.color = "black";
        document.querySelector('.Line').style.width = "0vw";
    }


    Turn = Player.innerText;

    Player.style.color = "blue";

    isGameOver = true;

    // console.log('--> ' + Turn);
    // document.getElementById("playername").innerText = `${Turn}`;
    // console.log('--> 1 : ' + Turn);

});


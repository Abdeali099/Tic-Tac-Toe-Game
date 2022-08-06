// ---------------- Declaring a Varibles ---------------- //

let audio_Music = new Audio("./External/music.mp3");
let audio_ting = new Audio("./External/ting.mp3");
let audio_gameover = new Audio("./External/gameover.mp3");

let Ele_Player = document.getElementById('playername');
let Turn = document.getElementById('playername').innerText;


let Boxes = document.getElementsByClassName("box");

let Reset = document.getElementById('reset');

let isGameOver = false;
let win = false;
let reset=false;

let Count=0;

console.log("Main Working");


// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeTurn = () => {
    console.log("Main Working-change Turn");
    return Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const checkWin = (t_Turn) => {

    let boxtext = document.getElementsByClassName('boxtext');

    console.log("Main Working-checkwin");


    // total 9 Box text : [0,...,8]

    let Wins = [

        //  E[0],E[1],E[2]....E[6]; 
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
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_Turn} `;

            Ele_Player.style.color = "black";
            Ele_Player.innerText = "is Won";

            win = true;
            isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // Drawing a Line //

            console.log("Main Working-above transform");

            document.querySelector('.Line').style.width = "20vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            audio_gameover.play();

            Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to Turn //

// Array.from(Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(Boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    // select Boxtext class of particulat element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    element.addEventListener('click', () => {

         if(isGameOver==true)
         {
            Boxes.disabled = true;
         }

         else
         {
            reset=false;

            if (boxtext.innerText === '') {
                boxtext.innerText = Turn;  // For The First time It is a 'X' //
    
                audio_ting.play();

                // Counting Box //

                    Count++;
    
                // Change colour of turn //
    
                if (Turn == "X") {
                    boxtext.style.color = "blue";
                    Ele_Player.style.color = "red";
                }
                
                else {
                    Ele_Player.style.color = "blue";
                    boxtext.style.color = "red";
                }
    
                checkWin(Turn);  // Check If Player Won Or Not //
    
                Turn = ChangeTurn(); // It will change Turn btw 'X' and 'O'//
    
    
                if (isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${Turn}`;
                }    
            }

                                      if (Count==9 && isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of Reset Button ---------------------- //

Reset.addEventListener('click', () => {

    let boxtext = document.querySelectorAll('.boxtext');

    Array.from(boxtext).forEach((element) => {

        element.innerText = "";

    });

    Ele_Player.innerText = "X";

    if (win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    Turn = Ele_Player.innerText;
    Ele_Player.style.color = "blue";

    isGameOver = false;
    
    Count=0;
});


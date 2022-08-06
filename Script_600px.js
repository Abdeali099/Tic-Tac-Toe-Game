// ---------------- Declaring a Varibles ---------------- //

let A_audio_Music = new Audio("./External/music.mp3");
let A_audio_ting = new Audio("./External/ting.mp3");
let A_audio_gameover = new Audio("./External/gameover.mp3");

let A_Ele_Player = document.getElementById('playername');
let A_Turn = document.getElementById('playername').innerText;


let A_Boxes = document.getElementsByClassName("box");

let A_Reset = document.getElementById('reset');

let A_isGameOver = false;
let A_win = false;
// let reset=false;

let A_Count=0;

console.log("Ya It Is Working");

// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeA_Turn = () => {
    console.log("Ya It Is Working-change Turn");

    return A_Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const A_checkWin = (t_A_Turn) => {

    let A_boxtext = document.getElementsByClassName('boxtext');

    console.log("Ya It Is Working-checkwin");

    // total 9 Box text : [0,...,8]

    let A_Wins = [

        //  E[0],E[1],E[2]....E[6]; 
        [0, 1, 2, 9, 6, 0, 1.2],
        [3, 4, 5, 9, 19, 0, 1.2],
        [6, 7, 8, 9, 32, 0, 1.2],
        [0, 3, 6, -5,19,90, 1.2],
        [1, 4, 7, 8,19,90, 1.2],
        [2, 5, 8, 21,19,90, 1.2],
        [0, 4, 8, 8,19,45, 1.2],
        [2, 4, 6,9,19,135, 1.2]
    ];


    // Wins.forEach(() => {});

    A_Wins.forEach((E) => {

        // Comparing all textbox with index Number

        if ((A_boxtext[E[0]].innerText === A_boxtext[E[1]].innerText) && (A_boxtext[E[1]].innerText === A_boxtext[E[2]].innerText) && (A_boxtext[E[0]].innerText != '')) {
            
            if (t_A_Turn == "X") {
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_A_Turn} `;

            A_Ele_Player.style.color = "black";
            A_Ele_Player.innerText = "is Won";

            A_win = true;
            A_isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraA_wing a Line //


            console.log("Ya It Is Working-above transform");

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            A_audio_gameover.play();

            A_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     A_window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all A_Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to A_Turn //

// Array.from(A_Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(A_Boxes).forEach(A_element => {

    console.log("Ya It Is Working-mail logic");


    let A_boxtext = A_element.querySelector('.boxtext');
    // select Boxtext class of particulat A_element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    A_element.addEventListener('click', () => {

         if(A_isGameOver==true)
         {
            A_Boxes.disabled = true;
         }

         else
         {
            // reset=false;

            if (A_boxtext.innerText === '') {
                A_boxtext.innerText = A_Turn;  // For The First time It is a 'X' //
    
                A_audio_ting.play();

                // A_Counting Box //

                    A_Count++;
    
                // Change colour of turn //
    
                if (A_Turn == "X") {
                    A_boxtext.style.color = "blue";
                    A_Ele_Player.style.color = "red";
                }
                
                else {
                    A_Ele_Player.style.color = "blue";
                    A_boxtext.style.color = "red";
                }
    
                A_checkWin(A_Turn);  // Check If Player Won Or Not //
    
                A_Turn = ChangeA_Turn(); // It will change A_Turn btw 'X' and 'O'//
    
    
                if (A_isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${A_Turn}`;
                }    
            }

                                      if (A_Count==9 && A_isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        A_Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     A_window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of A_Reset Button ---------------------- //

A_Reset.addEventListener('click', () => {

    let A_boxtext = document.querySelectorAll('.boxtext');

    Array.from(A_boxtext).forEach((A_element) => {

        A_element.innerText = "";

    });

    A_Ele_Player.innerText = "X";

    if (A_win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    A_Turn = A_Ele_Player.innerText;
    A_Ele_Player.style.color = "blue";

    A_isGameOver = false;

    A_Count=0;
    
});


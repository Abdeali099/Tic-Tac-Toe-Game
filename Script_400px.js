// ---------------- Declaring a Varibles ---------------- //

let D_audio_Music = new Audio("./External/music.mp3");
let D_audio_ting = new Audio("./External/ting.mp3");
let D_audio_gameover = new Audio("./External/gameover.mp3");

let D_Ele_Player = document.getElementById('playername');
let D_Turn = document.getElementById('playername').innerText;


let D_Boxes = document.getElementsByClassName("box");

let D_Reset = document.getElementById('reset');

let D_isGameOver = false;
let D_win = false;
// let reset=false;

let D_Count=0;

console.log("400px Working");

// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeD_Turn = () => {
    console.log("400px Working-change Turn");

    return D_Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const D_checkWin = (t_D_Turn) => {

    let D_boxtext = document.getElementsByClassName('boxtext');

    console.log("400px Working-checkwin");

    // total 9 Box text : [0,...,8]

    let D_Wins = [

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

    D_Wins.forEach((E) => {

        // Comparing all textbox with index Number

        if ((D_boxtext[E[0]].innerText === D_boxtext[E[1]].innerText) && (D_boxtext[E[1]].innerText === D_boxtext[E[2]].innerText) && (D_boxtext[E[0]].innerText != '')) {
            
            if (t_D_Turn == "X") {
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_D_Turn} `;

            D_Ele_Player.style.color = "black";
            D_Ele_Player.innerText = "is Won";

            D_win = true;
            D_isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraD_wing a Line //


            console.log("400px Working-above transform");

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            D_audio_gameover.play();

            D_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     D_window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all D_Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to D_Turn //

// Array.from(D_Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(D_Boxes).forEach(D_element => {

    console.log("400px Working-mail logic");


    let D_boxtext = D_element.querySelector('.boxtext');
    // select Boxtext class of particulat D_element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    D_element.addEventListener('click', () => {

         if(D_isGameOver==true)
         {
            D_Boxes.disabled = true;
         }

         else
         {
            // reset=false;

            if (D_boxtext.innerText === '') {
                D_boxtext.innerText = D_Turn;  // For The First time It is a 'X' //
    
                D_audio_ting.play();

                // D_Counting Box //

                    D_Count++;
    
                // Change colour of turn //
    
                if (D_Turn == "X") {
                    D_boxtext.style.color = "blue";
                    D_Ele_Player.style.color = "red";
                }
                
                else {
                    D_Ele_Player.style.color = "blue";
                    D_boxtext.style.color = "red";
                }
    
                D_checkWin(D_Turn);  // Check If Player Won Or Not //
    
                D_Turn = ChangeD_Turn(); // It will change D_Turn btw 'X' and 'O'//
    
    
                if (D_isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${D_Turn}`;
                }    
            }

                                      if (D_Count==9 && D_isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        D_Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     D_window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of D_Reset Button ---------------------- //

D_Reset.addEventListener('click', () => {

    let D_boxtext = document.querySelectorAll('.boxtext');

    Array.from(D_boxtext).forEach((D_element) => {

        D_element.innerText = "";

    });

    D_Ele_Player.innerText = "X";

    if (D_win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    D_Turn = D_Ele_Player.innerText;
    D_Ele_Player.style.color = "blue";

    D_isGameOver = false;

    D_Count=0;
    
});


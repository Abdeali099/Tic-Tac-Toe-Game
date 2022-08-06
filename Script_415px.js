// ---------------- Declaring a Varibles ---------------- //

let C_audio_Music = new Audio("./External/music.mp3");
let C_audio_ting = new Audio("./External/ting.mp3");
let C_audio_gameover = new Audio("./External/gameover.mp3");

let C_Ele_Player = document.getElementById('playername');
let C_Turn = document.getElementById('playername').innerText;


let C_Boxes = document.getElementsByClassName("box");

let C_Reset = document.getElementById('reset');

let C_isGameOver = false;
let C_win = false;
// let reset=false;

let C_Count=0;

console.log("415px Working");

// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeC_Turn = () => {
    console.log("415px Working-change Turn");

    return C_Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const C_checkWin = (t_C_Turn) => {

    let C_boxtext = document.getElementsByClassName('boxtext');

    console.log("415px Working-checkwin");

    // total 9 Box text : [0,...,8]

    let C_Wins = [

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

    C_Wins.forEach((E) => {

        // Comparing all textbox with index Number

        if ((C_boxtext[E[0]].innerText === C_boxtext[E[1]].innerText) && (C_boxtext[E[1]].innerText === C_boxtext[E[2]].innerText) && (C_boxtext[E[0]].innerText != '')) {
            
            if (t_C_Turn == "X") {
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_C_Turn} `;

            C_Ele_Player.style.color = "black";
            C_Ele_Player.innerText = "is Won";

            C_win = true;
            C_isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraC_wing a Line //


            console.log("415px Working-above transform");

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            C_audio_gameover.play();

            C_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     C_window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all C_Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to C_Turn //

// Array.from(C_Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(C_Boxes).forEach(C_element => {

    console.log("415px Working-mail logic");


    let C_boxtext = C_element.querySelector('.boxtext');
    // select Boxtext class of particulat C_element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    C_element.addEventListener('click', () => {

         if(C_isGameOver==true)
         {
            C_Boxes.disabled = true;
         }

         else
         {
            // reset=false;

            if (C_boxtext.innerText === '') {
                C_boxtext.innerText = C_Turn;  // For The First time It is a 'X' //
    
                C_audio_ting.play();

                // C_Counting Box //

                    C_Count++;
    
                // Change colour of turn //
    
                if (C_Turn == "X") {
                    C_boxtext.style.color = "blue";
                    C_Ele_Player.style.color = "red";
                }
                
                else {
                    C_Ele_Player.style.color = "blue";
                    C_boxtext.style.color = "red";
                }
    
                C_checkWin(C_Turn);  // Check If Player Won Or Not //
    
                C_Turn = ChangeC_Turn(); // It will change C_Turn btw 'X' and 'O'//
    
    
                if (C_isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${C_Turn}`;
                }    
            }

                                      if (C_Count==9 && C_isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        C_Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     C_window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of C_Reset Button ---------------------- //

C_Reset.addEventListener('click', () => {

    let C_boxtext = document.querySelectorAll('.boxtext');

    Array.from(C_boxtext).forEach((C_element) => {

        C_element.innerText = "";

    });

    C_Ele_Player.innerText = "X";

    if (C_win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    C_Turn = C_Ele_Player.innerText;
    C_Ele_Player.style.color = "blue";

    C_isGameOver = false;

    C_Count=0;
    
});


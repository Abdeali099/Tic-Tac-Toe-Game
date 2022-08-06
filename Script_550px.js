// ---------------- Declaring a Varibles ---------------- //

let B_audio_Music = new Audio("./External/music.mp3");
let B_audio_ting = new Audio("./External/ting.mp3");
let B_audio_gameover = new Audio("./External/gameover.mp3");

let B_Ele_Player = document.getElementById('playername');
let B_Turn = document.getElementById('playername').innerText;


let B_Boxes = document.getElementsByClassName("box");

let B_Reset = document.getElementById('reset');

let B_isGameOver = false;
let B_win = false;
// let reset=false;

let B_Count=0;

console.log("550px Working");

// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeB_Turn = () => {
    console.log("550px Working-change Turn");

    return B_Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const B_checkWin = (t_B_Turn) => {

    let B_boxtext = document.getElementsByClassName('boxtext');

    console.log("550px Working-checkwin");

    // total 9 Box text : [0,...,8]

    let B_Wins = [

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

    B_Wins.forEach((E) => {

        // Comparing all textbox with index Number

        if ((B_boxtext[E[0]].innerText === B_boxtext[E[1]].innerText) && (B_boxtext[E[1]].innerText === B_boxtext[E[2]].innerText) && (B_boxtext[E[0]].innerText != '')) {
            
            if (t_B_Turn == "X") {
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_B_Turn} `;

            B_Ele_Player.style.color = "black";
            B_Ele_Player.innerText = "is Won";

            B_win = true;
            B_isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraB_wing a Line //


            console.log("550px Working-above transform");

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            B_audio_gameover.play();

            B_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     B_window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all B_Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to B_Turn //

// Array.from(B_Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(B_Boxes).forEach(B_element => {

    console.log("550px Working-mail logic");


    let B_boxtext = B_element.querySelector('.boxtext');
    // select Boxtext class of particulat B_element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    B_element.addEventListener('click', () => {

         if(B_isGameOver==true)
         {
            B_Boxes.disabled = true;
         }

         else
         {
            // reset=false;

            if (B_boxtext.innerText === '') {
                B_boxtext.innerText = B_Turn;  // For The First time It is a 'X' //
    
                B_audio_ting.play();

                // B_Counting Box //

                    B_Count++;
    
                // Change colour of turn //
    
                if (B_Turn == "X") {
                    B_boxtext.style.color = "blue";
                    B_Ele_Player.style.color = "red";
                }
                
                else {
                    B_Ele_Player.style.color = "blue";
                    B_boxtext.style.color = "red";
                }
    
                B_checkWin(B_Turn);  // Check If Player Won Or Not //
    
                B_Turn = ChangeB_Turn(); // It will change B_Turn btw 'X' and 'O'//
    
    
                if (B_isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${B_Turn}`;
                }    
            }

                                      if (B_Count==9 && B_isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        B_Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     B_window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of B_Reset Button ---------------------- //

B_Reset.addEventListener('click', () => {

    let B_boxtext = document.querySelectorAll('.boxtext');

    Array.from(B_boxtext).forEach((B_element) => {

        B_element.innerText = "";

    });

    B_Ele_Player.innerText = "X";

    if (B_win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    B_Turn = B_Ele_Player.innerText;
    B_Ele_Player.style.color = "blue";

    B_isGameOver = false;

    B_Count=0;
    
});


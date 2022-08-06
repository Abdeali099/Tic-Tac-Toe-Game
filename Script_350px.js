// ---------------- Declaring a Varibles ---------------- //

let E_audio_Music = new Audio("./External/music.mp3");
let E_audio_ting = new Audio("./External/ting.mp3");
let E_audio_gameover = new Audio("./External/gameover.mp3");

let E_Ele_Player = document.getElementById('playername');
let E_Turn = document.getElementById('playername').innerText;


let E_Boxes = document.getElementsByClassName("box");

let E_Reset = document.getElementById('reset');

let E_isGameOver = false;
let E_win = false;
// let reset=false;

let E_Count=0;

console.log("350px Working");

// ---------------- Function : Return Whose turn is this 'X' or 'O' ---------------- //

const ChangeE_Turn = () => {
    console.log("350px Working-change Turn");

    return E_Turn === "X" ? "O" : "X";
    // condition ? true : false
};

// ---------------- Function : TO Check a Win Or Not.. ---------------- //

const E_checkWin = (t_E_Turn) => {

    let E_boxtext = document.getElementsByClassName('boxtext');

    console.log("350px Working-checkwin");

    // total 9 Box text : [0,...,8]

    let E_Wins = [

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

    E_Wins.forEach((E) => {

        // Comparing all textbox with index Number

        if ((E_boxtext[E[0]].innerText === E_boxtext[E[1]].innerText) && (E_boxtext[E[1]].innerText === E_boxtext[E[2]].innerText) && (E_boxtext[E[0]].innerText != '')) {
            
            if (t_E_Turn == "X") {
                document.getElementById("Info").style.color = "blue";              
            }

            else {
                document.getElementById("Info").style.color = "red";
            }

                     document.getElementById("Info").innerText = `${t_E_Turn} `;

            E_Ele_Player.style.color = "black";
            E_Ele_Player.innerText = "is Won";

            E_win = true;
            E_isGameOver = true;

            //  displaynig a gif //

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraE_wing a Line //


            console.log("350px Working-above transform");

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            E_audio_gameover.play();

            E_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //     E_window.location.reload();

            //   }, 3000);



        } // if close


    }); // for each is close

}; // function close

// ---------------- Game Logic ---------------------- //



// Step 1 : Take a Refernce of all E_Boxes : Refernce is already taken 'Box' //



// Step 2 : Select Box Individually and Assign 'X' or 'O' accroding to E_Turn //

// Array.from(E_Boxes).forEach(()=>{}); // ==> first we have convert it to array 

Array.from(E_Boxes).forEach(E_element => {

    console.log("350px Working-mail logic");


    let E_boxtext = E_element.querySelector('.boxtext');
    // select Boxtext class of particulat E_element (Select Only One at a time )//


    //   --- Adding an Event Listener  to Box (Element) --- //

    E_element.addEventListener('click', () => {

         if(E_isGameOver==true)
         {
            E_Boxes.disabled = true;
         }

         else
         {
            // reset=false;

            if (E_boxtext.innerText === '') {
                E_boxtext.innerText = E_Turn;  // For The First time It is a 'X' //
    
                E_audio_ting.play();

                // E_Counting Box //

                    E_Count++;
    
                // Change colour of turn //
    
                if (E_Turn == "X") {
                    E_boxtext.style.color = "blue";
                    E_Ele_Player.style.color = "red";
                }
                
                else {
                    E_Ele_Player.style.color = "blue";
                    E_boxtext.style.color = "red";
                }
    
                E_checkWin(E_Turn);  // Check If Player Won Or Not //
    
                E_Turn = ChangeE_Turn(); // It will change E_Turn btw 'X' and 'O'//
    
    
                if (E_isGameOver != true) // work till game is Not Over
                {
                    document.getElementById("playername").innerText = `${E_Turn}`;
                }    
            }

                                      if (E_Count==9 && E_isGameOver != true) 
                                      {
                                          document.getElementById("Info").style.color = `red`;
                                        document.getElementById("Info").innerText = `Game Is Over.. `;
                                        E_Ele_Player.innerText = "";


                                        //   setTimeout(() => {
                                            
                                        //     E_window.location.reload();

                                        //   }, 2000);
                                      }
         } // else close       

    }); // Event Listener close

}); // ForEach close


//---------------------- Logic Of E_Reset Button ---------------------- //

E_Reset.addEventListener('click', () => {

    let E_boxtext = document.querySelectorAll('.boxtext');

    Array.from(E_boxtext).forEach((E_element) => {

        E_element.innerText = "";

    });

    E_Ele_Player.innerText = "X";

    if (E_win == true) {
        document.getElementById("Info").innerText = `Turn For `;
        document.getElementById("Info").style.color = "black";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.Line').style.width = "0vw";
    }

    E_Turn = E_Ele_Player.innerText;
    E_Ele_Player.style.color = "blue";

    E_isGameOver = false;

    E_Count=0;
    
});


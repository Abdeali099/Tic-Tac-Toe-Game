import { globalVariable } from "./Script.js";

export function A_checkWin(t_A_Turn) 
{
let A_audio_gameover = new Audio("./External/gameover.mp3");

let A_Ele_Player = document.getElementById('playername');

let A_Boxes = document.getElementsByClassName("box");


let A_boxtext = document.getElementsByClassName('boxtext');


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
            
         

           globalVariable.Key_isGameOver=true;

        

                //  A_isGameOver = true;

            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraA_wing a Line //

            document.querySelector('.Line').style.width = "22vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            A_audio_gameover.play();

            A_Boxes.disabled = true;

            setTimeout(() => {
                                            
               window.location.reload();

              }, 2000);



        } // if close


    }); // for each is close

}; // function close

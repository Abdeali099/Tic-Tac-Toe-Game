import { globalVariable } from "./Script.js";

export function C_checkWin(t_C_Turn) 
{
let C_audio_gameover = new Audio("./External/gameover.mp3");

let C_Ele_Player = document.getElementById('playername');

let C_Boxes = document.getElementsByClassName("box");


let C_boxtext = document.getElementsByClassName('boxtext');


// total 9 Box text : [0,...,8]

    let C_Wins = [
        
        //  E[0],E[1],E[2]....E[6]; 
        [0, 1, 2, 9, 8, 0, 1.2],
        [3, 4, 5, 9, 24, 0, 1.2],
        [6, 7, 8, 9, 42, 0, 1.2],
        [0, 3, 6, -8,25,90, 1.2],
        [1, 4, 7, 9,25,90, 1.2],
        [2, 5, 8, 26,25,90, 1.2],
        [0, 4, 8, 10,25,45, 1.2],
        [2, 4, 6,10,25,135, 1.2]
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
            
         

           globalVariable.Key_isGameOver=true;

        

                //  C_isGameOver = true;

            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraC_wing a Line //

            document.querySelector('.Line').style.width = "32vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            C_audio_gameover.play();

            C_Boxes.disabled = true;

            setTimeout(() => {
                                            
               window.location.reload();

              }, 2000);



        } // if close


    }); // for each is close

}; // function close

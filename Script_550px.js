import { globalVariable } from "./Script.js";

export function B_checkWin(t_B_Turn) 
{
let B_audio_gameover = new Audio("./External/gameover.mp3");

let B_Ele_Player = document.getElementById('playername');

let B_Boxes = document.getElementsByClassName("box");


let B_boxtext = document.getElementsByClassName('boxtext');


// total 9 Box text : [0,...,8]

    let B_Wins = [
        
        //  E[0],E[1],E[2]....E[6]; 
        [0, 1, 2, 9, 7, 0, 1.2],
        [3, 4, 5, 9, 22, 0, 1.2],
        [6, 7, 8, 9, 37, 0, 1.2],
        [0, 3, 6, -6,22,90, 1.2],
        [1, 4, 7, 9,22,90, 1.2],
        [2, 5, 8, 24,22,90, 1.2],
        [0, 4, 8, 9,22,45, 1.2],
        [2, 4, 6,9,22,135, 1.2]
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
            
         

           globalVariable.Key_isGameOver=true;

        

                //  B_isGameOver = true;

            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraB_wing a Line //

            document.querySelector('.Line').style.width = "27vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            B_audio_gameover.play();

            B_Boxes.disabled = true;

            setTimeout(() => {
                                            
               window.location.reload();

              }, 4000);



        } // if close


    }); // for each is close

}; // function close

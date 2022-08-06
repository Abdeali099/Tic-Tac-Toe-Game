import { globalVariable } from "./Script.js";

export function D_checkWin(t_D_Turn) 
{
let D_audio_gameover = new Audio("./External/gameover.mp3");

let D_Ele_Player = document.getElementById('playername');

let D_Boxes = document.getElementsByClassName("box");


let D_boxtext = document.getElementsByClassName('boxtext');


// total 9 Box text : [0,...,8]

    let D_Wins = [
        
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
            
         

           globalVariable.Key_isGameOver=true;

        

                //  D_isGameOver = true;

            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraD_wing a Line //

            document.querySelector('.Line').style.width = "32vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            D_audio_gameover.play();

            D_Boxes.disabled = true;

            // setTimeout(() => {
                                            
            //    window.location.reload();

            //   }, 4000);



        } // if close


    }); // for each is close

}; // function close

import { globalVariable } from "./Script.js";

export function E_checkWin(t_E_Turn) 
{
let E_audio_gameover = new Audio("./External/gameover.mp3");

let E_Ele_Player = document.getElementById('playername');

let E_Boxes = document.getElementsByClassName("box");


let E_boxtext = document.getElementsByClassName('boxtext');


// total 9 Box text : [0,...,8]

    let E_Wins = [
        
        //  E[0],E[1],E[2]....E[6]; 
        [0, 1, 2, 9, 9, 0, 1.2],
        [3, 4, 5, 9, 19, 0, 1.2],
        [6, 7, 8, 9, 49, 0, 1.2],
        [0, 3, 6, -10,30,90, 1.2],
        [1, 4, 7, 10,30,90, 1.2],
        [2, 5, 8, 30,30,90, 1.2],
        [0, 4, 8, 11,30,45, 1.2],
        [2, 4, 6,11,29,135, 1.2]
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
            
         

           globalVariable.Key_isGameOver=true;

        

                //  E_isGameOver = true;

            //  displaynig a gif //
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '120px';


            // DraE_wing a Line //

            document.querySelector('.Line').style.width = "39vw";
            document.querySelector('.Line').style.transform = `translate(${E[3]}vw,${E[4]}vw) rotate(${E[5]}deg) scale(${E[6]})`;

            E_audio_gameover.play();

            E_Boxes.disabled = true;

            setTimeout(() => {
                                            
               window.location.reload();

              }, 4000);



        } // if close


    }); // for each is close

}; // function close

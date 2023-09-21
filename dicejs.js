const dic1= document.getElementById("dice1");
const dic2= document.getElementById("dice2");
const sp1= document.getElementById("p1score")
const sp2= document.getElementById("p2score")
const btn= document.getElementById("bttn")
const h2= document.getElementById("h2")

var gameon=1;
var max=prompt("Please enter valid score:");


const score=[0,0];


var activeplayer=0;

btn.addEventListener("click", () =>{
    if(max=="") {
        alert("Restart and please enter max score.");
        gameon=0;
    }
    if(gameon==1){
        
        if (activeplayer==0){
            var d1=Math.floor(Math.random() * 6) + 1;
            var d2=Math.floor(Math.random() * 6) + 1;

            dic1.src = 'dice_'+d1+'.png'
            dic2.src = 'dice_'+d2+'.png'
            if(d1==1 && d2==1) {
                score[activeplayer]=0;
                sp1.innerHTML=score[activeplayer];
                activeplayer=1;
            }
            else if(d1==d2) {
                score[activeplayer]+=(d1+d2);
                sp1.innerHTML=score[activeplayer];
            }
            else {
                score[activeplayer]+=(d1+d2);
                sp1.innerHTML=score[activeplayer];
                activeplayer=1;
            }
            
        }
        else if (activeplayer==1){
            var d1=Math.floor(Math.random() * 6) + 1;
            var d2=Math.floor(Math.random() * 6) + 1;

            dic1.src = 'dice_'+d1+'.png'
            dic2.src = 'dice_'+d2+'.png'
            if(d1==1 && d2==1) {
                score[activeplayer]=0;
                sp2.innerHTML=score[activeplayer];
                activeplayer=0;
            }
            else if(d1==d2) {
                score[activeplayer]+=(d1+d2);
                sp2.innerHTML=score[activeplayer];
            }
            else {
                score[activeplayer]+=(d1+d2);
                sp2.innerHTML=score[activeplayer];
                activeplayer=0;
            }
        }

        if (score[0]>=max) {
            gameon=0;
            h2.innerHTML="PLAYER 1 WINS";
        }
        else if (score[1]>=max) {
            gameon=0;
            h2.innerHTML="PLAYER 2 WINS";
        }
    }
    else if (gameon==0){
        h2.innerHTML="Game over!!! Restart!!";
    }
}
)


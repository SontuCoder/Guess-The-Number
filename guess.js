const num=1+Math.floor(100*(Math.random()));

console.log(num);
function Eclick(){
    let input=document.querySelector("#input");
        console.log(input.value);
        if(input.value==num){
            let p=document.createElement("p");
            p.className='con';
            let b=document.querySelector("body");
            p.innerHTML="Congratulation";
            b.prepend(p);
            let P=document.createElement("p");
            let s=document.querySelector(".Ans");
            P.innerHTML="Number is it.";
            s.prepend(P);
            input.value='';
        }else if(input.value<num){
            let p=document.createElement("p");
            let b=document.querySelector(".Ans");
            p.innerHTML="Number is greater than it.";
            b.prepend(p);
            input.value='';

        }else{
            let p=document.createElement("p");
            let b=document.querySelector(".Ans");
            p.innerHTML="Number is smaller than it."
            b.prepend(p);
            input.value='';
        }
    }

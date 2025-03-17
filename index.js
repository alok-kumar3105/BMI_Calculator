

let submit=document.querySelector('#button');

submit.addEventListener('click', function(e){
    e.preventDefault();
    let wt=parseFloat(document.querySelector('#weight').value);
    let ht=parseFloat(document.querySelector('#height').value);
    if(wt===''||wt<=0||isNaN(wt)){
        alert("Please Enter the correct weight.");
        return;
    }
    if(ht===''||ht<=0||isNaN(ht)){
        alert("Please Enter the correct height.");
        return;
    }
    let value=document.querySelector('#calcival');
    let val=((wt*10000)/(ht*ht)).toFixed(1);
    value.innerHTML=val;
    let comment=document.querySelector('#wordres');
    if(val<18.5){
        comment.textContent='You are UNDERWEIGHT!!';
        comment.style.color='greenYellow';
    }
    else if(val>=18.5 && val<25){
        comment.textContent='You are NORMAL!!';
        comment.style.color='green';
    }
    else if(val>=25 && val<30){
        comment.textContent='You are OverWeight!!';
        comment.style.color='orange';
    }
    else{
        comment.textContent='You are Obese!!';
        comment.style.color='red';
    }
})
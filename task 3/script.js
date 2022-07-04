var body=document.body;
var icon=document.getElementById('iconId');

function mode(){

    if(body.style.backgroundColor=='white')
    {
        body.style.backgroundColor='black';
        body.style.color='white';
        icon.className="fa-solid fa-sun";
        icon.style.backgroundColor='yellow';
        icon.style.Color='white';
    }
    else
    {
        body.style.backgroundColor='white';
        body.style.color='black';
        icon.className="fa-solid fa-moon";
        icon.style.backgroundColor='gray';
        icon.style.Color='white';
    }
}
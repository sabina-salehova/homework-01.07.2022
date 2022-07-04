var text = document.getElementById("result");

function findGroup(){    
    var name=document.getElementById("text").value;    
    if(name.charAt(1)=='1')
    {        
        text.innerHTML=name+'-seher qrupudur';
        text.style.color='yellow';             
    }
    else if(name.charAt(1)=='2')
    {
        text.innerHTML=name+'-gunorta qrupudur';
        text.style.color='red';
    }
    else if(name.charAt(1)=='3')
    {
        text.innerHTML=name+'-axsham qrupudur';  
        text.style.color='black';      
    }
    else
    {
        text.innerHTML='Duzgun daxil edilmeyib';
        text.style.color='gray'; 
    }
}

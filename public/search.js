'use strict';

function search_task() { 
    let input = document.getElementById('searchbar').value;


    input=input.toLowerCase(); 
    let x = document.querySelectorAll('main section div li'); 
      
    for (let i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
}

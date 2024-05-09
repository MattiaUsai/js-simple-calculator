

//HO CREATO UNA FUNZIONÈ CHE AL CLICCARE DEL BOTTONE MI DIA UN RETURN CHE INSERISCO IO COME PARAMETRO
function buttonclick (id,variables,result){
    
     variables = document.getElementById(`bt${id}`);
    variables.addEventListener("click" , function(){
        buttonclickk(result);
    })
    
   
  
}


buttonclick ('num1', 'btnumber1',1);
buttonclick ('num2', 'btnumber2',2);
buttonclick ('num3', 'btnumber3',3);
buttonclick ('num4', 'btnumber4',4);
buttonclick ('num5', 'btnumber5',5);
buttonclick ('num6', 'btnumber6',6);
buttonclick ('num7', 'btnumber7',7);
buttonclick ('num8', 'btnumber8',8);
buttonclick ('num9', 'btnumber9',9);

// console.log (value);

function buttonclickk (result){
    console.log('ho cliccato il numero',result)
    

}
let screen = document.getElementById('screen');


// let num1 = document.getElementById('btnum1')
// num1.addEventListener('click', function(){
//     screen.innerHTML += 1;
// })
function buttonclickk (result){
    console.log('ho cliccato il numero',result)
    screen.innerHTML += result

}


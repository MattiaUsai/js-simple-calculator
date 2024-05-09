

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
buttonclick ('num0', 'btnumber0',0);
buttonclick ('functionclear', 'btfunctionclear',"canc");
buttonclick ('functionplus', 'btfunctionplus','+');
buttonclick ('functionminus', 'btfunctionminus','-');
buttonclick ('functiondivision', 'btfunctiondivision','/');
buttonclick ('functionper', 'btfunctionper','*');

// console.log (value);


let screen = document.getElementById('screen');


// let num1 = document.getElementById('btnum1')
// num1.addEventListener('click', function(){
//     screen.innerHTML += 1;
// })
function buttonclickk (result){
    switch (result){
        case '+':
            screen.innerHTML = '';
            break;

        case '-':
            screen.innerHTML = '';
            break;

        case '*':
            screen.innerHTML = '';
            break;

        case '/':
            screen.innerHTML = '';
            break;
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
        case 8 :
        case 9 :
        case 0 :
            

        screen.innerHTML += result;
        break;





    }



    console.log('ho cliccato il numero',result)

}


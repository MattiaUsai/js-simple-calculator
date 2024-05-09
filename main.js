

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
buttonclick ('functionequal', 'btfunctionequal','=');

// console.log (value);


let screen = document.getElementById('screen');
let firstOperator = 0;
let secondOperator = 0;
let sign ;
let uguale = 0;



// let num1 = document.getElementById('btnum1')
// num1.addEventListener('click', function(){
//     screen.innerHTML += 1;
// })
function buttonclickk (result){
    switch (result){
        //tasto cancella 
        case 'canc':
            screen.innerHTML = '';
            firstOperator = 0;
            secondOperator = 0;
            uguale = 0;
            break;

            //TASTO ADDIZIONE
        case '+':
            sign = 'piu';
            firstOperator = +(screen.innerHTML) ;
            screen.innerHTML = '';
            console.log (firstOperator);
            break;

            //TASTO SOTTRAZIONE
        case '-':

            sign = 'meno';
            firstOperator = +(screen.innerHTML) ;
            screen.innerHTML = '';
            console.log (firstOperator);
            break;

            //TASTO MOLTIPLICAZIONE
        case '*':
            sign = 'per';
            firstOperator = +(screen.innerHTML) ;
            screen.innerHTML = '';
            console.log (firstOperator);
            break;

            //TASTO DIVISIONE
        case '/':
            sign = 'diviso';
            firstOperator = +(screen.innerHTML) ;
            screen.innerHTML = '';
            console.log (firstOperator);
            break;

           // TASTO RISULTATO
        case '=':
            
            secondOperator = +(screen.innerHTML) ;
            switch (sign){
                case 'piu':
                    uguale = (firstOperator + secondOperator)
                    console.log(`${firstOperator} + ${secondOperator}`)
                    break;

                case 'meno':
                    uguale = (firstOperator - secondOperator)
                    console.log(`${firstOperator} - ${secondOperator}`)
                    break;

                case 'per':
                    uguale = (firstOperator * secondOperator)
                    console.log(`${firstOperator} * ${secondOperator}`)
                    break;

                case 'diviso':
                    if (secondOperator===0) {uguale = 'Err'} //SE PROVIAMO A DIVIDERE UN NUMERO PER 0  LA CALCOLATRICE DARA ERR
                    else{
                    uguale = (firstOperator / secondOperator)} 
                    console.log(`${firstOperator} / ${secondOperator}`)
                    break;
            }

            screen.innerHTML = '';
            screen.innerHTML = uguale;
            console.log (uguale);
            break



        
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



 

}




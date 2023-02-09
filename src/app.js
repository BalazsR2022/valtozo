//let num1 = 37;
// num1 = 25;//Hibás!
//console.log(num1);


//if (num1 == 37){
  //   var a = 35;
  //   let b = 47;
//}

const num1Elem = document.querySelector('#num1');
const getButton = document.querySelector('#getButton');


getButton.addEventListener('click',() =>{
    
   let szam = num1Elem.value;
   num1Elem.value = '';
   kiir(szam);
   vizsgalat(szam);
});

function vizsgalat(input){
    let egyezik = input.match(/^[a-zA-ZéíóúűáÉÍÓÚŰÁ][0-9]+$/);
    if(egyezik){
        console.log('egyezik');
    }else{
        console.log('nem jó');
    }
    
}



function kiir(szam){
    if (szam == 1){//működik lettel és const-tal is
        console.log('Egy')//ennek az értéke általában egy weblapról jön
    }else if(szam ==2){
        console.log('kettő')
    }else if (szam ==3) {
        console.log('három')
    } else {
        console.log('ismeretlen érték')
    }
}


//többágú szelekció, nincs benne elif, csak a pythonban
console.log(window.screen.width)
console.log(window.screen.height)
//console.error('uuuuuuu')

const doboz1 = document.querySelector('#doboz1');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', () =>{
    doboz1.style.backgroundColor ='pink';
    doboz1.style.animation ='valami1 10s';
});

var szamokTomb = [35, 42, 27, 55, 72];
szamokTomb.forEach((szam) =>{
    console.log(szam);
});



    'use strict';
var user = prompt("hello , what is your name dud ?");
// console.log('hi'+user+'we are happy to see you here' )
alert('hi  ' + user + ' we are happy to see you here')
var counter = 0;
var qu = [
    ['do you guess what is my name?',
        'you are clever',
        'try again , trial for free for you dud'
    ],
    ['have you guessed what the lucky year that i was born in it',
        'i think it is done just by luck ',
        'you brokn my heart'

    ],
    ['do you think that you know where did i studed?',
        ' that is not bad , you know good info about me i think ',
        'keep in mind , its good to have agood info about afamous one like me '

    ],
    ['do you know what i fall in love with , i wll be surprised if you say yes',
        'am happy to hear that',
        'that is abad news for me'

    ],
    ['do you know where am from',
        'yaaaa that is good',
        ' bad bad bad '

    ],


];
for (var i = 0;i< qu.length;i++) {
    var currentq = qu[i];
// here we have array for 3 items which is prompt ,+ response,-response
var promptindex = 0;
var posindex = 1;
var negindex = 2;
var currentprompt = currentq[promptindex];
var userresponse = prompt(currentprompt);
userresponse = userresponse.toLowerCase();
var currentposi = currentq[posindex];
var currentneg = currentq[negindex];
switch (userresponse) {
    case 'yes':
    case 'y':
        counter = counter+1;
      
        alert(currentposi);
        break;
    case 'no':
    case 'n':
           
        alert(currentneg);
        break;
        default:
            alert ('wrong answer');}
            
}

let h = 5;
let a = 0;
while (a <4) {
    var num = Number(prompt("guess a number"));
    if (num == h) {
        alert("ohh that is correct");
        counter= counter+1;
        console.log(num)
        alert('you got'+counter+'point')
        break;}
    else if (1 < num && num <9 ) {
        alert("too low");
        console.log(num)
    } else if (9< num || num<1) {
        alert("too high");
        console.log(num);
    }
    a = a + 1;
    if (a==4)
{ alert(" i wish you could hit the right answer, which is was 5");}
}

var b=0;
while (b <7) {
    var animal = prompt("guess what is the kind of animal i love? ");
    animal=animal.toLowerCase()
    if (animal == 'cat'|| animal== 'dog' ||animal=='bird' ) {
        alert("ohh that is correct");
        counter = counter+1;
        console.log(animal);
        break;
    }
    else  {
        alert("that is wrong");

    }
    b = b+ 1;
    if (b==7)
{ alert(" i wish you know this info about me , i love cat ,dog and bird ");

}
}

alert('your total point is '+ counter );



const result = document.querySelector('#x')
const result2 = document.querySelector('#x2')
const changeX = document.getElementById('x1') 
const changeX2 = document.getElementById('x3')
const equation = document.querySelector('#equation') 
var a = window.prompt("enter value of a");
var b = window.prompt("enter value of b");
var c = window.prompt("enter value of c");
var toggled4 = false;
var x;
var x2;
var x1;
var x3;

x = ((-b + Math.sqrt(Math.pow(b,2)-( 4 * a * c )))/ ( 2 * a ))
x2 = (-b - Math.sqrt(Math.pow(b,2)-( 4 * a * c )))/ ( 2 * a )

result.innerHTML = x 
result2.innerHTML = x2 

changeX.addEventListener('click' ,() => { 
    toggle();
})

changeX2.addEventListener('click' ,() => { 
     Play();
})

function toggle() {   
    if( !toggled4 ){
        toggled4 = true;
        result.innerHTML = '( x + ' + (-x) + ')'  
        return; 
    }
    if(toggled4 ){
        toggled4 = false;
        result.innerHTML = x 
        return;
    }
}

function Play() {   
    if( !toggled4 ){
        toggled4 = true;
        result2.innerHTML = '( x + ' + (-x2) + ')'  
        return; 
    }
    if(toggled4 ){
        toggled4 = false;
        result2.innerHTML = x2 
        return;
    }
}

equation.innerHTML = 'x*2,'+(-x + -x2)+'x,'+ (+x * x2) + '-----------' +'( x + ' + (-x) + ')'  + '( x + ' + (-x2) + ')' + '= 0';

/* const bet = document.getElementById('bet')
var toggled = false;

bet.addEventListener('click' ,()=>{
})

function toggle() {   
    if( !toggled ){
        toggled = true;
        document.getElementById('test').style.display = 'none'
        return; 
    }
    if(toggled){
        toggled = false;
        document.getElementById('test').style.display = 'block'
        return;
    }
} */
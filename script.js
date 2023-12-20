var pourcentage = 0.22;
var horaireb = document.getElementById('hb1');
var horairen = document.getElementById('hb4');
var mensuelb = document.getElementById('hb2');
var mensueln = document.getElementById('hb5');
var annueln = document.getElementById('hb6');
var annuelb = document.getElementById('hb3');

function hb1(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    debugger
    switch(pourcentage){
        case 0.22:
            
            horairen.value=(horaireb.value*0.78).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.25:
            horairen.value=(horaireb.value*0.75).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.15:
            horairen.value=(horaireb.value*0.85).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.45:
            horairen.value=(horaireb.value*0.55).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.51:
            horairen.value=(horaireb.value*0.49).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
    }
}
function hb2(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    switch(pourcentage){
        case 0.22:
            horaireb.value=(mensuelb.value/140).toFixed(2);
            horairen.value=(horaireb.value*0.78).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.25:
            horaireb.value=(mensuelb.value/140).toFixed(2);
            horairen.value=(horaireb.value*0.75).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.15:
            horaireb.value=(mensuelb.value/140).toFixed(2);
            horairen.value=(horaireb.value*0.85).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.45:
            horaireb.value=(mensuelb.value/140).toFixed(2);
            horairen.value=(horaireb.value*0.55).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.51:
            horaireb.value=(mensuelb.value/140).toFixed(2);
            horairen.value=(horaireb.value*0.49).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
    }
}
function hb3(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    switch(pourcentage){
        case 0.22:
            horaireb.value=(annuelb.value/1680).toFixed(2);
            horairen.value=(horaireb.value*0.78).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.25:
            horaireb.value=(annuelb.value/1680).toFixed(2);
            horairen.value=(horaireb.value*0.75).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.15:
            horaireb.value=(annuelb.value/1680).toFixed(2);
            horairen.value=(horaireb.value*0.85).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.45:
            horaireb.value=(annuelb.value/1680).toFixed(2);
            horairen.value=(horaireb.value*0.55).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.51:
            horaireb.value=(annuelb.value/1680).toFixed(2);
            horairen.value=(horaireb.value*0.49).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
    }
}
function hb4(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    switch(pourcentage){
        case 0.22:
            horaireb.value=(horairen.value/0.78).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.25:
            horaireb.value=(horairen.value/0.75).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.15:
            horaireb.value=(horairen.value/0.85).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.45:
            horaireb.value=(horairen.value/0.55).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.51:
            horaireb.value=(horairen.value/0.49).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
    }
}
function hb5(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    switch(pourcentage){
        case 0.22:
            horairen.value=(mensueln.value/140).toFixed(2);
            horaireb.value=(horairen.value/0.78).toFixed(2);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.25:
            horairen.value=(mensueln.value/140).toFixed(2);
            horaireb.value=(horairen.value/0.75).toFixed(2);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.15:
            horairen.value=(mensueln.value/140).toFixed(2);
            horaireb.value=(horairen.value/0.85).toFixed(2);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.45:
            horairen.value=(mensueln.value/140).toFixed(2);
            horaireb.value=(horairen.value/0.55).toFixed(2);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
        case 0.51:
            horairen.value=(mensueln.value/140).toFixed(2);
            horaireb.value=(horairen.value/0.49).toFixed(2);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            annuelb.value=(horaireb.value*1680).toFixed(0);
            break;
    }
}
function hb6(){
    let a=document.getElementById('hb1');
    if (a.value<0){
           a.value=0;
    }
    switch(pourcentage){
        case 0.22:
            horairen.value=(annueln.value/1680).toFixed(2);
            horaireb.value=(horairen.value/0.78).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.25:
            horairen.value=(annueln.value/1680).toFixed(2);
            horaireb.value=(horairen.value/0.75).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.15:
            horairen.value=(annueln.value/1680).toFixed(2);
            horaireb.value=(horairen.value/0.85).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.45:
            horairen.value=(annueln.value/1680).toFixed(2);
            horaireb.value=(horairen.value/0.55).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
        case 0.51:
            horairen.value=(annueln.value/1680).toFixed(2);
            horaireb.value=(horairen.value/0.49).toFixed(2);
            mensueln.value=(horairen.value*140).toFixed(0);
            mensuelb.value=(horaireb.value*140).toFixed(0);
            annueln.value=(horairen.value*1680).toFixed(0);
            break;
    }
}
function radio1_(){
    document.getElementById('pour').innerHTML = "<p>Non-Cadre-22%</p>";
    pourcentage = 0.22;
    if(horaireb.value !== 0 || horaireb.value !== ''){
        hb1();
    } 
}
function radio2_(){
    document.getElementById('pour').innerHTML = "<p>Cadre-25%</p>";
    pourcentage = 0.25;
    if(horaireb.value !== 0 || horaireb.value !== ''){
        hb1();
    } 
}
function radio3_(){
    document.getElementById('pour').innerHTML = "<p>Public-15%</p>";
    pourcentage = 0.15;
    if(horaireb.value !== 0 || horaireb.value !== ''){
        hb1();
    } 
}
function radio4_(){
    document.getElementById('pour').innerHTML = "<p>Indé-45%</p>";
    pourcentage = 0.45;
    if(horaireb.value !== 0 || horaireb.value !== ''){
        hb1();
    } 
}
function radio5_(){
    document.getElementById('pour').innerHTML = "<p>Port-51%</p>";
    pourcentage = 0.51;
    if(horaireb.value !== 0 || horaireb.value !== ''){
        hb1();
    } 
}

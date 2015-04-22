var table;
(function () {
    table = document.getElementsByClassName('demo')[0];
    doInject();

})();

function doInject() {
    var isDiv = document.getElementById('injected');
    if(isDiv){
        return;
    }
    var div = document.createElement('div');
    div.setAttribute('id','injected');
    document.body.appendChild(div);
    startGetPc();
    setInterval(function(){
        startGetPc();
    },7000);
}



function startGetPc(){
    getMacMini2();
    doGet(getLianxiang,1000);
    doGet(getLianxiang2,2000);
    doGet(getMacMini1,3000);
    doGet(getMacMini3,4000);
    doGet(getMacMini4,5000);
    doGet(getMacMini5,6000);
    doGet(getMacMini6,7000);
}
function doGet(func,times){
    setTimeout(function(){
        func();
    },times);
}

function getMacMini1(){
    var input  = table.querySelectorAll('tbody tr')[1].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m1')
    input.click();
}

function getMacMini2(){
    var input  = table.querySelectorAll('tbody tr')[9].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m2')
    input.click();
}

function getMacMini3(){
    var input  = table.querySelectorAll('tbody tr')[2].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m3')
    input.click();
}

function getMacMini4(){
    var input  = table.querySelectorAll('tbody tr')[3].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m4')
    input.click();
}

function getMacMini5(){
    var input  = table.querySelectorAll('tbody tr')[4].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m5')
    input.click();
}

function getMacMini6(){
    var input  = table.querySelectorAll('tbody tr')[6].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('m6')
    input.click();
}

function getLianxiang(){
    var input  = table.querySelectorAll('tbody tr')[34].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('liangxiang')
    input.click();
}

function getLianxiang2(){
    var input  = table.querySelectorAll('tbody tr')[75].querySelectorAll('td')[7].querySelectorAll('input')[0];
    console.log('Lianxiang2')
    input.click();
}

var table;
(function () {
    table = document.getElementsByClassName('demo')[0];
    doInject();

})();

function doInject() {
    //document.body.onload = null;
    var isDiv = document.getElementById('injected');
    if (isDiv) {
        return;
    }
    var div = document.createElement('div');
    div.setAttribute('id', 'injected');
    document.body.appendChild(div);
    startGetPc();
    setInterval(function () {
        startGetPc();
    }, 4500);
}


function startGetPc() {
    getMacMini2();
    doGet(getLianxiang, 500);
    doGet(getLianxiang2, 1500);
    doGet(getMacMini1, 2000);
    doGet(getLianxiang3, 2500);
    doGet(getMacMini3, 3000);
    doGet(getMacMini4, 3500);
    doGet(getMacMini5, 4000);
    doGet(getMacMini6, 4500);
}
function doGet(func, times) {
    setTimeout(function () {
        func();
    }, times);
}

function getMacMini1() {
    try {
        var input = table.querySelectorAll('tbody tr')[1].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // input.removeAttribute('disabled');
        console.log('m1 waiting')
        input.click();
    } catch (e) {
        console.log('m1 error')
    }
}

function getMacMini2() {
    try {
        var input = table.querySelectorAll('tbody tr')[8].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('m2 waiting')
        input.click();
    } catch (e) {
        console.log('m2 error')
    }

}

function getMacMini3() {
    try {
        var input = table.querySelectorAll('tbody tr')[2].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('m3 waiting')
        input.click();
    } catch (e) {
        console.log('m3 error')
    }

}

function getMacMini4() {
    try {
        var input = table.querySelectorAll('tbody tr')[3].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('m4 waiting')
        input.click();
    } catch (e) {
        console.log('m4 error')
    }
}

function getMacMini5() {
    try {
        var input = table.querySelectorAll('tbody tr')[4].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // input.removeAttribute('disabled');
        console.log('m5 waiting')
        input.click();
    } catch (e) {
        console.log('m5 error')
    }

}

function getMacMini6() {
    try {
        var input = table.querySelectorAll('tbody tr')[6].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('m6 waiting')
        input.click();
    } catch (e) {
        console.log('m6 error')
    }

}

function getLianxiang() {
    try {
        var input = table.querySelectorAll('tbody tr')[34].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // console.log('liangxiang waiting')
        input.click();
    } catch (e) {
        console.log('liangxiang error')
    }

}

function getLianxiang2() {
    try {
        var input = table.querySelectorAll('tbody tr')[74].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // input.removeAttribute('disabled');
        console.log('Lianxiang2 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang2 error')
    }

}

function getLianxiang3() {
    try {
        var input = table.querySelectorAll('tbody tr')[69].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('Lianxiang2 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang2 error')
    }
}

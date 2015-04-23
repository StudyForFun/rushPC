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
    }, 2000);
}


function startGetPc() {
    getLianxiang1();
    doGet(getLianxiang2, 500);
    doGet(getLianxiang3, 1500);
    doGet(getLianxiang4, 2000);
}
function doGet(func, times) {
    setTimeout(function () {
        func();
    }, times);
}



function getLianxiang1() {
    try {
        var input = table.querySelectorAll('tbody tr')[70].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // console.log('liangxiang waiting')
        input.click();
    } catch (e) {
        console.log('liangxiang error')
    }

}

function getLianxiang2() {
    try {
        var input = table.querySelectorAll('tbody tr')[71].querySelectorAll('td')[7].querySelectorAll('input')[0];
       // input.removeAttribute('disabled');
        console.log('Lianxiang2 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang2 error')
    }

}

function getLianxiang3() {
    try {
        var input = table.querySelectorAll('tbody tr')[72].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('Lianxiang3 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang3 error')
    }
}

function getLianxiang4() {
    try {
        var input = table.querySelectorAll('tbody tr')[73].querySelectorAll('td')[7].querySelectorAll('input')[0];
        //input.removeAttribute('disabled');
        console.log('Lianxiang4 waiting')
        input.click();
    } catch (e) {
        console.log('Lianxiang4 error')
    }
}